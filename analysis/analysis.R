require(plyr)
require(reshape)
require(lme4)
require(lmerTest)
require(ggplot2)

## load data
data <- read.csv("~/experiments/ComplementCoercion/data.csv")

## remove practice items
data <- subset(data, type!='practice')

## drops practice from levels
data$type <- data$type[drop=T,]

## move sentence number to column called sentence
data$sentence <- data$item

## make item numbers
data$item <- ceiling((data$item - 8) / 3)

## get accuracy
accuracy <- subset(data, !is.na(accuracy))

## get participant accuracy
accuracy.participant <- ddply(accuracy, c('participant'), summarise, acc=mean(accuracy))

## get sentence accuracy
#accuracy.sentence <- ddply(accuracy, c('sentence'), summarise, accuracy=mean(accuracy))

## get sentence accuracy
#accuracy.item <- ddply(accuracy, c('item'), summarise, accuracy=mean(accuracy))

## reject participants by accuracy

#### set threshold
threshold <- .9

#### find participants below threshold
reject.participant <- subset(accuracy.participant, acc < threshold)$participant

#### remove rejected participants
for (part in reject.participant){
  data <- subset(data, participant != part)
}

#### drop rejected participants
data$participant <- data$participant[drop=T,]

## remove questions and positions above 6
spr <- subset(data, position < 7 & !is.na(position))

## make position a factor
spr$position <- as.factor(spr$position)

## create inverse and log rt columns
spr$inv.rt <- 1 / spr$rt
spr$log.rt <- log(spr$rt)

## two factor ANOVA with repeated measures on both factors

#### by-subject
m.raw.aov.part <- aov(rt ~ type * position + Error(participant/(type * position)), data=spr)
m.inv.aov.part <- aov(inv.rt ~ type * position + Error(participant/(type * position)), data=spr)
m.log.aov.part <- aov(log.rt ~ type * position + Error(participant/(type * position)), data=spr)

#### by-item
m.raw.aov.item <- aov(rt ~ type * position + Error(item/(type * position)), data=spr)
m.inv.aov.item <- aov(inv.rt ~ type * position + Error(item/(type * position)), data=spr)
m.log.aov.item <- aov(log.rt ~ type * position + Error(item/(type * position)), data=spr)


## fit linear mixed model

#### raw rt
m.raw.lme <- lmer(rt ~ type*position + (1|participant) + (1|item), data=spr)

#### inverse rt
m.inv.lme <- lmer(inv.rt ~ type*position + (1|participant) + (1|item), data=spr)

#### log rt
m.log.lme <- lmer(log.rt ~ type*position + (1|participant) + (1|item), data=spr)
