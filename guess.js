var randomNumber = Math.floor(Math.random() * 100) + 1;
var playerGuess;
var userInput= document.getElementById("input");
var userOutput=document.getElementById("output");
var button=document.getElementById("guess");

function playGame(){
  "use strict";
  playerGuess= parseInt(userInput.value,10);

  if(playerGuess>randomNumber) {
    userOutput.innerHTML="Your Guess was too high";
  }
  else if(playerGuess<randomNumber) { 
    userOutput.innerHTML="Your guess was too low";
    
  }
  else if( playerGuess===randomNumber) {
    userOutput.innerHTML="Correct,Well done!";
  }


};

button.addEventListener("click",playGame,false);

