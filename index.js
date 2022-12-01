var readlineSync = require('readline-sync');

var score = 0;

var questionnumber1 = "Are you love playing football ? " 
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


var questionnumber2 = "Are you also a fan Cristiano Ronaldo ? " 
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

var questionnumber3 = "Tell me what is the biggest strength of Cristiano Ronaldo ? " 
var answer3 = "mind" 

var UserAnswer = readlineSync.question(questionnumber3);


console.log ("you entered " + UserAnswer);

if (UserAnswer === answer3) {
  console.log("great!, you know your idol very well. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}