$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var userNum = 0;
  var compNum = randomNum();
  var crystals;

  function randomNum() {
    return Math.floor(Math.random() * 102) + 19;
  }
console.log(compNum)
})

function newGame() {
  userNum = 0;
  crystals = randomRockValue();
  compNum = randomNumGen();
  $("#compNum").text(compNum);
}