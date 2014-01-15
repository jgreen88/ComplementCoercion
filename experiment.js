
    var shuffleSequence = seq("consent", "intro", "practice", "begin", sepWith("sep", rshuffle("coercion", "preferred", "dispreferred")), "sr", "debrief");
    var practiceItemTypes = ["practice"];

    var defaults = [
        "Separator", {
            transfer: 500,
            hideProgressBar: true,
            normalMessage: "+"
        },
        "Message", {
            transfer: "keypress",
            hideProgressBar: true
        },
        "Form", { hideProgressBar: true }

    ];

    var items = [
            ["consent", "Form", {
            html: { include: "consent.html" },
                    validators: {age: function (s) { if (s.match(/^\d+$/)) return true;
                                                            else return "Bad value for age"; }}
        } ],

            ["intro", "Message", {html: { include: "intro.html" }}],

            ["practice", "DashedSentence", {s: "Gary ran quickly to the minimart to get milk."},
                         "Question",       {q: 'Did Gary run slowly?', as: ['Yes', 'No']}],
            ["practice", "DashedSentence", {s: "Stacy built a house out of mud and straw."},
                         "Question",       {q: 'Did Stacy use mud?', as: ['Yes', 'No']}],],
            ["practice", "DashedSentence", {s: "Bill ate five veggie burgers in one hour."},
                         "Question",       {q: 'Did Bill eat turkey burgers?', as: ['Yes', 'No']}],],

            ["begin", "Message", {
                                    html: { include: "begin.html" },
                                    } ],

        ["sep", "Separator", { }],

        [["coercion", 1], "DashedSentence", {s: "The surfer endured the tuxedo but felt very uncomfortable."}, "Question", {q: "Was the surfer comfortable?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 1], "DashedSentence", {s: "The surfer wore the tuxedo but felt very uncomfortable."}, "Question", {q: "Was the surfer comfortable?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 1], "DashedSentence", {s: "The surfer rented the tuxedo but felt very uncomfortable."}, "Question", {q: "Was the surfer comfortable?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 2], "DashedSentence", {s: "The secretary began the memo before the annual sales conference."}, "Question", {q: "Was it after the conference?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 2], "DashedSentence", {s: "The secretary typed the memo before the annual sales conference."}, "Question", {q: "Was it after the conference?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 2], "DashedSentence", {s: "The secretary read the memo before the annual sales conference."}, "Question", {q: "Was it after the conference?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 3], "DashedSentence", {s: "The pilot mastered the airplane and moved on to the helicopter."}, "Question", {q: "Did he fly the plane first?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 3], "DashedSentence", {s: "The pilot flew the airplane and moved on to the helicopter."}, "Question", {q: "Did he fly the plane first?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 3], "DashedSentence", {s: "The pilot landed the airplane and moved on to the helicopter."}, "Question", {q: "Did he fly the plane first?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 4], "DashedSentence", {s: "The author was starting the book in his house on the island."}, "Question", {q: "Was the house on a mountain?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 4], "DashedSentence", {s: "The author was writing the book in his house on the island."}, "Question", {q: "Was the house on a mountain?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 4], "DashedSentence", {s: "The author was reading the book in his house on the island."}, "Question", {q: "Was the house on a mountain?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 5], "DashedSentence", {s: "The soldier attempted the mountain as part of his training."}, "Question", {q: "Was he training?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 5], "DashedSentence", {s: "The soldier climbed the mountain as part of his training."}, "Question", {q: "Was he training?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 5], "DashedSentence", {s: "The soldier scaled the mountain as part of his training."}, "Question", {q: "Was he training?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 6], "DashedSentence", {s: "The artist began the portrait in his studio in the city."}, "Question", {q: "Was the studio in the suburbs?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 6], "DashedSentence", {s: "The artist painted the portrait in his studio in the city."}, "Question", {q: "Was the studio in the suburbs?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 6], "DashedSentence", {s: "The artist analyzed the portrait in his studio in the city."}, "Question", {q: "Was the studio in the suburbs?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 7], "DashedSentence", {s: "The doctor expected the report before the patient returned for further tests."}, "Question", {q: "Did the patient return yet?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 7], "DashedSentence", {s: "The doctor received the report before the patient returned for further tests."}, "Question", {q: "Did the patient return yet?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 7], "DashedSentence", {s: "The doctor composed the report before the patient returned for further tests."}, "Question", {q: "Did the patient return yet?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 8], "DashedSentence", {s: "The chef started the dinner long before any guests arrived."}, "Question", {q: "Did he invite guests?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 8], "DashedSentence", {s: "The chef prepared the dinner long before any guests arrived."}, "Question", {q: "Did he invite guests?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 8], "DashedSentence", {s: "The chef ate the dinner long before any guests arrived."}, "Question", {q: "Did he invite guests?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 9], "DashedSentence", {s: "The pilot preferred the biplane with the bright red tail."}, "Question", {q: "Was the tail red?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 9], "DashedSentence", {s: "The pilot flew the biplane with the bright red tail."}, "Question", {q: "Was the tail red?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 9], "DashedSentence", {s: "The pilot landed the biplane with the bright red tail."}, "Question", {q: "Was the tail red?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 10], "DashedSentence", {s: "The composer started the symphony at the concert in the park."}, "Question", {q: "Was the symphony in the park?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 10], "DashedSentence", {s: "The composer wrote the symphony at the concert in the park."}, "Question", {q: "Was the symphony in the park?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 10], "DashedSentence", {s: "The composer directed the symphony at the concert in the park."}, "Question", {q: "Was the symphony in the park?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 11], "DashedSentence", {s: "The receiver tried the door to the basement."}, "Question", {q: "Was the door on the second floor?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 11], "DashedSentence", {s: "The receiver opened the door to the basement."}, "Question", {q: "Was the door on the second floor?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 11], "DashedSentence", {s: "The receiver closed the door to the basement."}, "Question", {q: "Was the door on the second floor?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 12], "DashedSentence", {s: "The customer started the dinner at the new French restaurant."}, "Question", {q: "Was the restaurant French?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 12], "DashedSentence", {s: "The customer ate the dinner at the new French restaurant."}, "Question", {q: "Was the restaurant French?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 12], "DashedSentence", {s: "The customer ordered the dinner at the new French restaurant."}, "Question", {q: "Was the restaurant French?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 13], "DashedSentence", {s: "The nurse preferred the velvet and the jet black silk."}, "Question", {q: "Was the silk red?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 13], "DashedSentence", {s: "The nurse wrote the velvet and the jet black silk."}, "Question", {q: "Was the silk red?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 13], "DashedSentence", {s: "The nurse felt the velvet and the jet black silk."}, "Question", {q: "Was the silk red?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 14], "DashedSentence", {s: "The builder started the house after the last of the snow melted."}, "Question", {q: "Had the snow melted?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 14], "DashedSentence", {s: "The builder built the house after the last of the snow melted."}, "Question", {q: "Had the snow melted?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 14], "DashedSentence", {s: "The builder demolished the house after the last of the snow melted."}, "Question", {q: "Had the snow melted?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 15], "DashedSentence", {s: "The waitress started the coffee before she went home for the night."}, "Question", {q: "Was it morning?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 15], "DashedSentence", {s: "The waitress poured the coffee before she went home for the night."}, "Question", {q: "Was it morning?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 15], "DashedSentence", {s: "The waitress drank the coffee before she went home for the night."}, "Question", {q: "Was it morning?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 16], "DashedSentence", {s: "The writer finished the novel before going on vacation in Mexico."}, "Question", {q: "Was the vacation to Mexico?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 16], "DashedSentence", {s: "The writer wrote the novel before going on vacation in Mexico."}, "Question", {q: "Was the vacation to Mexico?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 16], "DashedSentence", {s: "The writer reviewed the novel before going on vacation in Mexico."}, "Question", {q: "Was the vacation to Mexico?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 17], "DashedSentence", {s: "The composer was attempting the solo before the spring concert."}, "Question", {q: "Was the concert in autumn?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 17], "DashedSentence", {s: "The composer was composing the solo before the spring concert."}, "Question", {q: "Was the concert in autumn?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 17], "DashedSentence", {s: "The composer was singing the solo before the spring concert."}, "Question", {q: "Was the concert in autumn?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 18], "DashedSentence", {s: "The teenager started the novel about things that happened in the high school."}, "Question", {q: "Was the novel about high school?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 18], "DashedSentence", {s: "The teenager read the novel about things that happened in the high school."}, "Question", {q: "Was the novel about high school?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 18], "DashedSentence", {s: "The teenager wrote the novel about things that happened in the high school."}, "Question", {q: "Was the novel about high school?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 19], "DashedSentence", {s: "The dieter resisted the ice cream at her niece's birthday party."}, "Question", {q: "Was the party for a boy?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 19], "DashedSentence", {s: "The dieter ate the ice cream at her niece's birthday party."}, "Question", {q: "Was the party for a boy?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 19], "DashedSentence", {s: "The dieter bought the ice cream at her niece's birthday party."}, "Question", {q: "Was the party for a boy?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 20], "DashedSentence", {s: "The cook savored the spice at the restaurant on the corner."}, "Question", {q: "Was the restaurant nearby?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 20], "DashedSentence", {s: "The cook tasted the spice at the restaurant on the corner."}, "Question", {q: "Was the restaurant nearby?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 20], "DashedSentence", {s: "The cook bought the spice at the restaurant on the corner."}, "Question", {q: "Was the restaurant nearby?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 21], "DashedSentence", {s: "The architect started the house in his studio downtown."}, "Question", {q: "Was the studio uptown?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 21], "DashedSentence", {s: "The architect designed the house in his studio downtown."}, "Question", {q: "Was the studio uptown?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 21], "DashedSentence", {s: "The architect planned the house in his studio downtown."}, "Question", {q: "Was the studio uptown?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 22], "DashedSentence", {s: "The teacher was enjoying the sandwich in the lunch room."}, "Question", {q: "Was she in the lunch room?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 22], "DashedSentence", {s: "The teacher was eating the sandwich in the lunch room."}, "Question", {q: "Was she in the lunch room?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 22], "DashedSentence", {s: "The teacher was serving the sandwich in the lunch room."}, "Question", {q: "Was she in the lunch room?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 23], "DashedSentence", {s: "The professor survived the dentist the other day."}, "Question", {q: "Was it today?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 23], "DashedSentence", {s: "The professor visited the dentist the other day."}, "Question", {q: "Was it today?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 23], "DashedSentence", {s: "The professor advised the dentist the other day."}, "Question", {q: "Was it today?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 24], "DashedSentence", {s: "The diner was starting the meal at the counter in the back."}, "Question", {q: "Was the counter in front?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 24], "DashedSentence", {s: "The diner was eating the meal at the counter in the back."}, "Question", {q: "Was the counter in front?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 24], "DashedSentence", {s: "The diner was making the meal at the counter in the back."}, "Question", {q: "Was the counter in front?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 25], "DashedSentence", {s: "The girl preferred the sandals with the thick leather sole."}, "Question", {q: "Was the sole thin?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 25], "DashedSentence", {s: "The girl wore the sandals with the thick leather sole."}, "Question", {q: "Was the sole thin?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 25], "DashedSentence", {s: "The girl bought the sandals with the thick leather sole."}, "Question", {q: "Was the sole thin?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 26], "DashedSentence", {s: "The worker began the memo to the district managers."}, "Question", {q: "Were they district managers?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 26], "DashedSentence", {s: "The worker read the memo to the district managers."}, "Question", {q: "Were they district managers?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 26], "DashedSentence", {s: "The worker wrote the memo to the district managers."}, "Question", {q: "Were they district managers?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 27], "DashedSentence", {s: "The engineer started the memo late at night in his home office."}, "Question", {q: "Was it nighttime?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 27], "DashedSentence", {s: "The engineer wrote the memo late at night in his home office."}, "Question", {q: "Was it nighttime?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 27], "DashedSentence", {s: "The engineer read the memo late at night in his home office."}, "Question", {q: "Was it nighttime?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 28], "DashedSentence", {s: "The cook started the meal at the restaurant near the river."}, "Question", {q: "Was the restaurant close to the river?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 28], "DashedSentence", {s: "The cook prepared the meal at the restaurant near the river."}, "Question", {q: "Was the restaurant close to the river?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 28], "DashedSentence", {s: "The cook served the meal at the restaurant near the river."}, "Question", {q: "Was the restaurant close to the river?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 29], "DashedSentence", {s: "The student began the book late in the semester."}, "Question", {q: "Was it early in the semester?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 29], "DashedSentence", {s: "The student read the book late in the semester."}, "Question", {q: "Was it early in the semester?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 29], "DashedSentence", {s: "The student wrote the book late in the semester."}, "Question", {q: "Was it early in the semester?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 30], "DashedSentence", {s: "The lawyer preferred the convertible with the yellow racing stripe."}, "Question", {q: "Was the convertible yellow?", hasTrue: "Yes", as: ["Yes","No"]}]
[["preferred", 30], "DashedSentence", {s: "The lawyer drove the convertible with the yellow racing stripe."}, "Question", {q: "Was the convertible yellow?", hasTrue: "Yes", as: ["Yes","No"]}]
[["dispreferred", 30], "DashedSentence", {s: "The lawyer parked the convertible with the yellow racing stripe."}, "Question", {q: "Was the convertible yellow?", hasTrue: "Yes", as: ["Yes","No"]}]
[["coercion", 31], "DashedSentence", {s: "The pupil started the test in the chemistry lab."}, "Question", {q: "Was the pupil in the biology lab?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 31], "DashedSentence", {s: "The pupil took the test in the chemistry lab."}, "Question", {q: "Was the pupil in the biology lab?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 31], "DashedSentence", {s: "The pupil wrote the test in the chemistry lab."}, "Question", {q: "Was the pupil in the biology lab?", hasTrue: "No", as: ["Yes","No"]}]
[["coercion", 32], "DashedSentence", {s: "The pianist began the symphony in a nearly empty concert hall."}, "Question", {q: "Was the concert hall full?", hasTrue: "No", as: ["Yes","No"]}]
[["preferred", 32], "DashedSentence", {s: "The pianist played the symphony in a nearly empty concert hall."}, "Question", {q: "Was the concert hall full?", hasTrue: "No", as: ["Yes","No"]}]
[["dispreferred", 32], "DashedSentence", {s: "The pianist composed the symphony in a nearly empty concert hall."}, "Question", {q: "Was the concert hall full?", hasTrue: "No", as: ["Yes","No"]}]

    ];
    