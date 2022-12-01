var readlineSync = require('readline-sync');

var score = 0;

var questionnumber1 = "Do you love football ? " 
var answer1 = "yes" 

var UserAnswer = readlineSync.question(questionnumber1);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer1) {
  console.log("yes, you are right my boy")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}


var questionnumber2 = "Do you know about Cristiano Ronaldo ? " 
var answer2 = "yes" 

var UserAnswer = readlineSync.question(questionnumber2);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer2) {
  console.log("yes, great! ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}

var questionnumber3 = "what is the first jersey number of cristiano ronaldo when he started playing football? " 
var answer3 = "28" 

var UserAnswer = readlineSync.question(questionnumber3);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer3) {
  console.log("very few people know this. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}


var questionnumber4 = "Tell me what is the biggest strength of Cristiano Ronaldo ? " 
var answer4 = "mind" 

var UserAnswer = readlineSync.question(questionnumber4);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer4) {
  console.log("great!, you are true fan")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}



var questionnumber5 = "Tell me how much Ballon d'Or cristiano ronaldo have ? " 
var answer5 = "5" 

var UserAnswer = readlineSync.question(questionnumber5);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer5) {
  console.log("congrats!, you know the legend very well. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}


