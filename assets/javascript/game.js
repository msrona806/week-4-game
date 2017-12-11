// VARIABLES
var targetNumber = Math.floor((Math.random() * 100 ) + 19); // random number generator for target score, 20-100
var counter = 0; // counter for tracking total score
var win = 0;
var lose = 0;

// win/lose counter
$("#wins").text(win);
$("#losses").text(lose);

        
// link the targetNum and targetNumber for showing results on html page. 
$("#targetNum").text(targetNumber);

//link counter to guesses on html page
$("#guesses").text(counter); //*** UPDATING IN CONSOLE, BUT NOT UPDATING IN HTML ***

// randon number generator for jewels, any number 1-12
var pink= Math.floor((Math.random() * 12) + 1);
var yellow= Math.floor((Math.random() * 12) + 1);
var green= Math.floor((Math.random() * 12) + 1);
var purple= Math.floor((Math.random() * 12) + 1);

//random number for each crystal
$("#yellow").on("click", function() {
  (counter += (yellow));
  console.log(counter, yellow); score()
});
$("#pink").on("click", function() {
    (counter += (pink));
    console.log(counter, pink); score()
});
$("#purple").on("click", function() {
  (counter += (purple));
  console.log(counter, purple); score()
});
$("#green").on("click", function() {
    (counter += (green));
    console.log(counter, green); score()
});



// logic for comparing score to target
function score() { 
  if (counter === targetNumber){ 
  alert("Awesome, you win"); win ++; 
  reset();
}
  else if (counter >= targetNumber){
  lose ++; alert("You lose!!"); }
  // reset();
  
}
  console.log(lose); console.log(win); //console log to see if score is changing 
  //***NOT CHANGING***

// resets game 
function reset () {
  var targetNumber = Math.floor((Math.random() * 100 ) + 19);
  pink= Math.floor((Math.random() * 12) + 1);
  yellow= Math.floor((Math.random() * 12) + 1);
  green= Math.floor((Math.random() * 12) + 1);
  purple= Math.floor((Math.random() * 12) + 1);
  counter = 0;
  $("#guesses").text(counter);
}

// Set the inner HTML contents of #psychic div to html string
// document.querySelector("#crystal").innerHTML = html;


// function updates() {
//   return counter
