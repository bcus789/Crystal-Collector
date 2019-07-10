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

let yellowBam = Math.floor(Math.random() * 12) + 1
let superIce = Math.floor(Math.random() * 12) + 1
let laGlass = Math.floor(Math.random() * 12) + 1

//machine number picker
function randomNum() {
  return Math.floor(Math.random() * 102) + 19;
}
$("#compNum").append($("<h5>").text(compNum));
$("#wins").html($("<h7>").text("wins: " + wins));
$("#losses").html($("<h8>").text("losses: " + losses));
$("#userNum").append($("<h6>").text(userNum));


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
    wins ++
    $("#wins").append($("<p>").text(wins));
    alert("you win! But also you are still addicted to meth")
    newGame();
   }
  else if (userNum > compNum) {
    losses++;
    alert("you lose you worthless piece of trash")
    $("#losses").append($("<h8>").text(losses));
    newGame();
  }
  }

   

})


 
