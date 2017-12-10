// VARIABLES
var targetNumber = Math.floor((Math.random() * 100) + 20); // random number generator for target score, 20-100
var counter = 0; // counter for tracking total score
var win = 0;
var lose = 0;

// win/lose counter
$("#wins").text(win);
$("#losses").text(lose);

// id for crystal images
          
// link the targetNum and targetNumber
$("#targetNum").text(targetNumber);

$("#guesses").text(counter);

// randon number generator for jewels
var pink= Math.floor((Math.random() * 15) + 1);

//random number for each crystal
$("#pink").on("click", function() {
  (counter += (pink));
  console.log(counter);

// logic for comparing score to target
  if (counter === targetNumber){
  alert("Awesome, you win"); win++;
} else if (counter >= targetNumber){ 
  alert("You lose!!"); lose++;
}
});


