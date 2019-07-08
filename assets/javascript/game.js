$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var userNum = 0;
  var compNum = randomNum();
  var crystals;

function newGame() {
  userNum = 0;
  crystals = randomRockValue();
  compNum = randomNum();
  $("#compNum").text(compNum);
}

function randomNum() {
  return Math.floor(Math.random() * 102) + 19;
}
console.log(compNum)
})

function crystalNums() {
  return {
    YellowBam: Math.floor(Math.random() * 12) + 1,
    SuperIce: Math.floor(Math.random() * 12) + 1,
    LaGlass: Math.floor(Math.random() * 12) + 1
    }
  }
