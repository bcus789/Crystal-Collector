$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var userNum = 0;
  var compNum = randomNum();
  let yellowBam = Math.floor(Math.random() * 12) + 1;
  let superIce = Math.floor(Math.random() * 12) + 1;
  let laGlass = Math.floor(Math.random() * 12) + 1;

  //new game state
function newGame() {
  userNum = 0;
  compNum = randomNum();
  let yellowBam = Math.floor(Math.random() * 12) + 1
  let superIce = Math.floor(Math.random() * 12) + 1
  let laGlass = Math.floor(Math.random() * 12) + 1
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
let yellowBam = Math.floor(Math.random() * 12) + 1
let superIce = Math.floor(Math.random() * 12) + 1
let laGlass = Math.floor(Math.random() * 12) + 1

$("#beep").on ('click', function(){
  userNum = userNum + yellowBam
  $('#userNum').text(userTotal);})

$("#boop").on ('click', function(){
  userNum = userNum + yellowBam
  $('#userNum').text(userTotal);})

$("#baap").on ('click', function(){
  userNum = userNum + yellowBam
  $('#userNum').text(userTotal);})

   // win/loss state
 if (userNum === compNum) {
  wins++;
  newGame();
 }
 else if (userNum > compNum) {
  losses++;
  newGame();
 }
 
 
