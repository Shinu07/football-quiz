var readlineSync = require('readline-sync');

var score = 0;

var question1 = "Do you love football ? " 
var answer1 = "yes"

var UserAnswer = readlineSync.question(question1);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase() === answer1.toUpperCase()) {
  console.log("yes, you are right my boy")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}


var question2 = "Do you know about Cristiano Ronaldo ? " 
var answer2 = "yes"

var UserAnswer = readlineSync.question(question2);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase()  === answer2.toUpperCase()) {
  console.log("yes, great! ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}

var question3 = "what is the first jersey number of cristiano ronaldo when he started playing football? " 
var answer3 = "28" 

var UserAnswer = readlineSync.question(question3);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase()  === answer3.toUpperCase()) {
  console.log("very few people know this. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}


var question4 = "Tell me what is the biggest strength of Cristiano Ronaldo ? " 
var answer4 = "mind"

var UserAnswer = readlineSync.question(question4);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase()  === answer4.toUpperCase() ) {
  console.log("great!, you are true fan")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}



var question5 = "Tell me how much Ballon d'Or cristiano ronaldo have ? " 
var answer5 = "5" 

var UserAnswer = readlineSync.question(question5);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase()  === answer5.toUpperCase() ) {
  console.log("congrats!, you know the legend very well. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);  
}

question:


var question6 = "How many times Cristiano played in world Cup ? " 
var answer6 = "5" 

var UserAnswer = readlineSync.question(question6);


console.log ("you entered " + UserAnswer);

if (UserAnswer.toUpperCase()  === answer5.toUpperCase() ) {
  console.log("congrats!, you know the legend very well. ")
  score = score + 1;
  console.log("Score is " + score);
  } else {
  console.log ("you are wrong")
  score = score - 1;
 console.log("Score is " + score);
 
}
console.log("-----------------------------")
 console.log("Your Total Score is " + score)
console.log("-----------------------------")


