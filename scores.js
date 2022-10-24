//this creates the screen where users can see their saved scores and initials
var score = document.querySelector(".score");
var backButton = document.querySelector(".back-button");
var clear = document.querySelector(".clear-button");
//event listener that allows the user to clear their scores
clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
//displays the score on the screen
if (allScores !== null) {
  for (var i=0; i<allScores.length; i++){
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].userScore;
    score.appendChild(createLi);
  }
}
//creates the back button that sends you back to the beginning of the quiz
backButton.addEventListener("click", function() {
  window.location.replace("./index.html")
})