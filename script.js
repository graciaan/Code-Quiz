/**
 * User sees a start game button
 * User starts the game
 * Timer starts
 * User sees first question with multiple choice answers
 * User selects answer
 * If correct, next question is displayed
 * If incorrect, time is subtracted from the timer, and the next question is displayed
 * Game ends with clock reaching 0 OR user answers all questions correctly
 * After game ends user can save initials and score
 */

//created objects for each question with their multiple choice answers in an array and the correct answer named as well

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
//variables created in global scope to be used throughout the code
var startGame = document.querySelector("#start-button");
var timer = document.querySelector("#timer")
var secondsRemaining = 61;
var zero = 0;
var questions = document.querySelector("#questions");
var parentList = document.createElement("ul");
var index = 0;
var score = 0;
var pentaltyPoints = 10;

//event listener and functions to start the game
startGame.addEventListener("click", function() {
  if (zero === 0) {
    zero = setInterval(function(){
      secondsRemaining--
      timer.textContent = secondsRemaining + " seconds remaining";
      if (secondsRemaining <= 0) {
        clearInterval(zero);
        timer.textContent = "Time has expired!"
      };
  }, 1000)
  };
  questionChoices(index)
});

//function that puts the multiple choice options in to a list and displays it on screen. 
function questionChoices(index){
  questions.innerHTML = "";
  parentList.innerHTML = "";
  for (let i = 0; i < questionsAndAnswers.length; i++){
    questionDisplay = questionsAndAnswers[index].question;
    answerDisplay = questionsAndAnswers[index].answerChoices;
    questions.textContent = questionDisplay;
  }
  answerDisplay.forEach(function(newChoice){
    let answerList = document.createElement("li")
    answerList.textContent = newChoice;
    questions.appendChild(parentList);
    parentList.appendChild(answerList);
    answerList.addEventListener("click", (userChoice))
  })
}

//allows the next question to appear after selecting an answer
function userChoice(event) {
  var element = event.target;
  if (element.matches("li")) {
    var createDiv = document.createElement("div");
  }
  if (element.textContent == questionsAndAnswers[index].correctAnswer) {
    createDiv.textContent = "Yes! That is correct!"
    score++
    } else {
    secondsRemaining = secondsRemaining - pentaltyPoints;
    createDiv.textContent = "Incorrect! :( The correct answer is: " +questionsAndAnswers[index].correctAnswer;
    score--
  }
  index++
  if (index >= questionsAndAnswers.length) {
    if (score < 0){
      score = 0  //this if statement sets it so we can't have a negative score
    }
    gameOver(); 
    } else {
      questionChoices(index);
    }
    questions.appendChild(createDiv)
  }

//final function for when quiz is over
function gameOver() {
  questions.innerHTML = "";
  parentList.innerHTML = "";
  var quizComplete = document.createElement("h2");
  quizComplete.textContent = "The quiz has ended";
  questions.appendChild(quizComplete);
  
  //creates form to submit initials and saves the score & initials to local storage
  var initialInput = document.createElement("input");
  initialInput.placeholder = "Type initials here";
  initialInput.type = "text";
  initialInput.id = "formInput";
  questions.appendChild(initialInput);
  var initialButton = document.createElement("button");
  initialButton.type = "submit";
  initialButton.id = "button-form";
  initialButton.textContent = "submit";
  questions.appendChild(initialButton);
  initialButton.addEventListener("click", function(){
    var userInitial = initialInput.value;
    if (userInitial === ""){
      prompt("Please enter your initials")
    } else {
      var finalScore = {
        initials: userInitial, 
        userScore: score
      }
      console.log(finalScore)
      var allScores = localStorage.getItem("allScores")
      if (allScores === null){
        allScores = [];
      } else {
        allScores = JSON.parse(allScores)
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores)
      localStorage.setItem("allScores", newScore)
      window.location.replace("./scores.html");
    }
  })
}