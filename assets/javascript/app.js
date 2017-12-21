$(document).ready(function(){

  // define variables
  var timeRemaining = 0;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var noAnswer = 0;

  // define functions

  // on click that starts game when user clicks start button
  $(".start").click(function() {
    console.log("user has started the game");
    // start the game on a user click
  });

  // on click function that ends game with user clicks submit button
  $(".submit").click(function(){
    console.log("user has ended the game");
    // finish the game on a user click
  });

  // function that automatically ends the game when the timeRemaining is at zero
  function endGame() {
    // if timeRemaining gets to 0, complete endGame
  }

  //function that counts up and displays the score at the end of the game
  function gameScore() {
    // if user guesses correctly, add one to correctAnswer
    // else, add one to incorrectAnswer
  }

});
