// VARIABLES
var targetNumber = 20;
var counter = 0;
var numberOptions = [10, 11];

// id for crystal images
           // var crystals = document.getElementById("pink");

// code to link the targetNum and targetNumber
$("#targetNum").text(targetNumber);

// randon number generator for jewels

// random number generator for target score
var increment = numberOptions[Math.round(Math.random())];

// counter for wins/losses

// counter for tracking total score
$("#pink").on("click", function() {
  
  //counter increases by 1 everytime clicked
  counter += increment;
  alert("you new score " + counter);

// logic for comparing score to target
if (counter === targetNumber){
  alert("Awesomeness");
} else if (counter >= targetNumber){ 
  alert("You lose!!");
}

});

// on-click event to that adds numbers to the jewels
// $("#pink").on("click", function() {
//   alert("gotcha");
// });
; 


