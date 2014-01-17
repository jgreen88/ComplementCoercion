from random import shuffle, choice
from string import Template, hexdigits
from optparse import OptionParser


def generate_hexcode(length):
    hex_list = [choice(hexdigits) for i in xrange(length)]
    return ''.join(hex_list)

exp_template = lambda items: Template('''
var shuffleSequence = seq("setcounter", "consent", "intro", "practice", "begin", sepWith("sep", randomize(shuffle("coercion", "preferred", "dispreferred"))), "sr", "debrief");
var practiceItemTypes = ["practice"];
var manualSendResults = true;

var defaults = [
    "Separator", {
        transfer: 500,
        hideProgressBar: true,
        normalMessage: "+",
        errorMessage: "Incorrect"
    },
    "Message", { hideProgressBar: true },
    "Form", { hideProgressBar: true }
];

var items = [
        ["consent", "Form", {
        html: { include: "consent.html" },
                validators: {age: function (s) { if (s.match(/^\d+$$/)) return true;
                                                        else return "Bad value for age"; }}
    } ],

        ["intro", "Message", {html: { include: "introduction.html" }}],

        ["setcounter", "__SetCounter__", { }],
        ["sr", "__SendResults__", { }],

        ["practice", "DashedSentence", {s: "Gary ran quickly to a minimart to get milk."},
                     "Question",       {q: "Where did Gary run?", hasCorrect:"a minimart",  as: ["a minimart", "a dairy", "a wine store"]}],
        ["practice", "DashedSentence", {s: "Stacy built a house out of mud."},
                     "Question",       {q: 'What did Stacy build her house out of?', hasCorrect: "mud",  as: ["straw", "mud", "wood"]}],
        ["practice", "DashedSentence", {s: "Bill ate five veggie burgers in one hour."},
                     "Question",       {q: "What kind of burgers did Bill eat?", hasCorrect: "veggie",  as: ["veggie", "turkey", "beef"]}],

        ["begin", "Message", {
                                html: { include: "begin.html" },
                                } ],

        ["sep", "Separator", { }],

     $items
];
''').substitute(items=items)



debrief_template = lambda code: Template('''<div style="width: 40em;">
    <p>
      You are now finished with the experiment. Your payment code can be found below. You will copy this code into the <i>Code</i> field of the survey page in Amazon Mechanical Turk. Once you have done so, submit the survey.</i> Once we have received both the code from Amazon and your data, you will receive your credit.  
    </p>

    <center>
      <b>$code</b>
    </center>
</div>''').substitute(code=code)





class Experiment(object):

    def __init__(self, sentences_file, questions_file, num_of_subjects=60):

        self._create_dashed_sentences(sentences_file)
        self._create_questions(questions_file)
        self._create_debriefs(num_of_subjects)

        self._create_experiment()


    def _create_dashed_sentences(self, items_file):
        items_list = []

        for i, line in enumerate(items_file):
            sentence = line.strip()

            if i == 0:
                sentence_list = [sentence]
            elif i % 3:
                sentence_list.append(sentence)
            else:
                item = DashedSentence(sentence_list)
                items_list.append(item)

                sentence_list = [sentence]
        else:
            item = DashedSentence(sentence_list)
            items_list.append(item)

            sentence_list = [sentence]

        self.sentences = items_list


    def _create_questions(self, questions_file):
        question_answers_list = [line.strip().split(',') for line in questions_file]

        questions = []

        for question_answers in question_answers_list:
            question = question_answers[0]
            answer_list = question_answers[1:]

            item = Question(question, answer_list)

            questions.append(item)

        self.questions = questions


    def _create_debriefs(self, num_of_subjects):

        self.debriefs = Debrief(num_of_subjects)
        

    def _create_controllers(self):
        num_of_items = len(self.sentences)
        
        groups = range(1, num_of_items+1)
        
        controller_strings = []

        for i, sentence in enumerate(self.sentences):
            controller_str = sentence.create_controllers(self.questions[i], groups[i])
            controller_strings.append(controller_str)
            
        debrief_str = self.debriefs.create_controller(num_of_items+1)
        controller_strings.append(debrief_str)

        return ',\n'.join(controller_strings)


    def _create_experiment(self):
        controllers_str = self._create_controllers()

        self.experiment = exp_template(controllers_str)


    def write_csv(self, output_filename):
        f = open(output_filename, 'w')
        f.write(self.experiment)


class DashedSentence(object):

    def __init__(self, sentence_list):

        self.sentence_list = sentence_list


    def create_controllers(self, question, group):

        question_controller = question.create_controller()

        conditions = ['coercion', 'preferred', 'dispreferred']

        controller_str_list = []

        for i, sentence in enumerate(self.sentence_list):
            template = Template('''\t[["$cond", $group], "DashedSentence", {s: "$sentence"}, 
                          $question]''')
            controller_str = template.substitute(cond=conditions[i], 
                                                 group=group,
                                                 sentence=sentence, 
                                                 question=question_controller)


            controller_str_list.append(controller_str)

        return ',\n'.join(controller_str_list)
            

class Question(object):

    def __init__(self, question, answer_set):

        self.question = question

        self._set_answer(answer_set)


    def _set_answer(self, answer_set):

        self.answer = answer_set[0]

        if len(answer_set) > 1:
            answer_set_formatted = ['"{}"'.format(ans) for ans in answer_set]
            shuffle(answer_set_formatted)

            self.answer_set = answer_set_formatted
    
        elif self.answer.lower() in ['yes', 'no']:
            self.answer_set = ['"Yes"', '"No"']


    def create_controller(self):
        answer_set_str = ','.join(self.answer_set)

        template = Template('"Question", {q: "$question", hasCorrect: "$answer", as: [$possible]}')
        
        return template.substitute(question=self.question, answer=self.answer, possible=answer_set_str)
    

class Debrief(object):

    def __init__(self, num_of_subjects):

        self.num_of_subjects = num_of_subjects
        self.fname_func = lambda i: 'debrief'+str(i)+'.html'

    def create_html(self):
        for i in xrange(self.num_of_subjects):
            f = open(self.fname_func(i), 'w')
            code = generate_hexcode(10)
            
            f.write(debrief_template(code))


    def create_controller(self, group):
        template = Template('\t[["debrief", $group], "Message", {html: { include: "$fname" }}]')

        controller_list = [template.substitute(group=group, fname=self.fname_func(i)) for i in xrange(self.num_of_subjects)]
        
        #self.create_html()

        return ',\n'.join(controller_list)
            


if __name__ == '__main__':

    optparser = OptionParser()

    optparser.add_option("-s", "--sentences", dest="sentences_filename")
    optparser.add_option("-q", "--questions", dest="questions_filename")
    optparser.add_option("-o", "--output", dest="output_filename")

    options, args = optparser.parse_args()

    sentences_file = open(options.sentences_filename)
    questions_file = open(options.questions_filename)

    exp = Experiment(sentences_file, questions_file)
    exp.write_csv(options.output_filename)
    
