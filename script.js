/**
 * User sees a start game button
 * User starts the game
 * Timer starts
 * User sees first question with multiple choice answers
 * User selects answer
 * If correct, next question is displayed
 * If incorrect, time is subtracted from the timer
 * Game ends with clock reaching 0 OR user answers all questions correctly
 * After game ends user can save initials and score
 * User can then go back to start or reset score
 */


const questionsAndAnswers = [
  {
    question: "A very useful tool used during development and debuggin for printing content to the debugger is: ",
    answerChoices: ["Javascript", "terminal/bash","for loops","console.log"],
    correctAnswer: "console.log"
  },
  {
    question: "The condition in an if/else statement is enclosed within ____ ",
    answerChoices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: "curly brackets"
  },
  {
    question: "String values ust be enclosed within ____ when being assigned to variables",
    answerChoices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: "quotes"
  },
  {
    question: "Commonly used data types DO NOT include: ",
    answerChoices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "alerts"
  },
  {
    question: "Arrays in JavaScript can be used to store _____ ",
    answerChoices: ["numbers and string", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
  }
];

var startGame = document.querySelector(".start-button");
var secondsRemaining = 61;
var zero = 0;
var questions = document.querySelector(".questions");

startGame.addEventListener("click", function() {
  if (zero === 0) {
    zero = setInterval(function(){
      secondsRemaining--
      startGame.textContent = secondsRemaining + " seconds remaining";
      if (secondsRemaining <= 0) {
        clearInterval(zero);
        startGame.textContent = "Time has expired!"
      };
  }, 1000)
  };
  questionChoices()
});

function questionChoices(){
  for (let i = 0; i < questionsAndAnswers.length; i++){
    questionDisplay = questionsAndAnswers[i].question;
    answersDisplay = questionsAndAnswers[i].answerChoices;
    questions.textContent = questionDisplay;
  }


}
