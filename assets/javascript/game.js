$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var userNum = 0;
  var compNum = randomNum();
  var rocks;

  //new game state
function newGame() {
  userNum = 0;
  crystals = crystalNums();
  compNum = randomNum();
}

//machine number picker
function randomNum() {
  return Math.floor(Math.random() * 102) + 19;
}

console.log(compNum)
$("#compNum").append($("<p>").text(compNum));
$("#wins").append($("<p>").text(wins));
$("#losses").append($("<p>").text(losses));
})

// sets random rock values
function crystalNums() {
  return {
    YellowBam: Math.floor(Math.random() * 12) + 1,
    SuperIce: Math.floor(Math.random() * 12) + 1,
    LaGlass: Math.floor(Math.random() * 12) + 1
    }
  }


  // win/loss state
  if (userNum === compNum) {
    wins++;
    newGame();
  }
  else if (userNum > compNum) {
    losses++;
    newGame();
  }