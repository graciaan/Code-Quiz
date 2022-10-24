var score = document.querySelector(".score");
var backButton = document.querySelector(".back-button");
var clear = document.querySelector(".clear-button");

clear.addEventListener("click", function(){
  localStorage.clear();
  location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
  for (var i=0; i<allScores.length; i++){
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].userScore;
    score.appendChild(createLi);
  }

}
backButton.addEventListener("click", function() {
  window.location.replace("./index.html")
})