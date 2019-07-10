$(document).ready(function() {

  var wins = 0;
  var losses = 0;
  var userNum = 0;
  var compNum = randomNum();
 

  //new game state
function newGame() {
  userNum = 0;
  compNum = randomNum();
  var yellowBam = Math.floor(Math.random() * 12) + 1
  var superIce = Math.floor(Math.random() * 12) + 1
  var laGlass = Math.floor(Math.random() * 12) + 1
}

//machine number picker
function randomNum() {
  return Math.floor(Math.random() * 102) + 19;
}

$("#beep").on ('click', function(e){
  console.log(userNum)
  userNum = userNum + yellowBam
  $('#userNum').text(userNum);
  winState()
})

$("#boop").on ('click', function(e){
  userNum = userNum + superIce
  $('#userNum').text(userNum);
  winState()
})

$("#baap").on ('click', function(e){
  userNum = userNum + laGlass
  $('#userNum').text(userNum);
  winState()
})

  
  function winState(){
  if (userNum === compNum) {
    wins += 1
    console.log('win')
    newGame();
   }
  else if (userNum > compNum) {
    losses++;
    console.log('loss')
    newGame();
  }
  }

   
console.log(compNum)
$("#compNum").append($("<p>").text(compNum));
$("#wins").append($("<p>").text(wins));
$("#losses").append($("<p>").text(losses));
$("#userNum").append($("<p>").text(userNum));
})


// sets random rock values
let yellowBam = Math.floor(Math.random() * 12) + 1
let superIce = Math.floor(Math.random() * 12) + 1
let laGlass = Math.floor(Math.random() * 12) + 1

   // win/loss state
   

 
