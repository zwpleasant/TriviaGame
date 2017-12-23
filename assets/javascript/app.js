$(document).ready(function(){

  // define variables for scoring
  var timeRemaining = 30;
  var correctAnswer = 0;
  var incorrectAnswer = 0;
  var noAnswer = 0;

  // define variables for correct answers
  var answer1 = "a";
  var answer2 = "c";
  var answer3 = "c";
  var answer4 = "b";
  var answer5 = "b";
  var answer6 = "d";
  var answer7 = "b";
  var answer8 = "d";
  var answer9 = "c";
  var answer10 = "d";

  // define variables for user answers
  var userAnswer1 = ""; // need to populate these...
  var userAnswer2 = "";
  var userAnswer3 = "";
  var userAnswer4 = "";
  var userAnswer5 = "";
  var userAnswer6 = "";
  var userAnswer7 = "";
  var userAnswer8 = "";
  var userAnswer9 = "";
  var userAnswer10 = "";

  // define functions

  // on click that starts game when user clicks start button
  $(".start").click(function() {
    console.log("user has started the game");
    // start the game on a user click
    setTimeout(timeUp, 1000 * 30);
  });

  // on click function that ends game with user clicks submit button
  $(".submit").click(function(){
    userAnswer1 = $("input[name='q1']:checked").val();
    console.log(userAnswer1);
    userAnswer2 = $("input[name='q2']:checked").val();
    console.log(userAnswer2);
    userAnswer3 = $("input[name='q3']:checked").val();
    console.log(userAnswer3);
    userAnswer4 = $("input[name='q4']:checked").val();
    console.log(userAnswer4);
    userAnswer5 = $("input[name='q5']:checked").val();
    console.log(userAnswer5);
    userAnswer6 = $("input[name='q6']:checked").val();
    console.log(userAnswer6);
    userAnswer7 = $("input[name='q7']:checked").val();
    console.log(userAnswer7);
    userAnswer8 = $("input[name='q8']:checked").val();
    console.log(userAnswer8);
    userAnswer9 = $("input[name='q9']:checked").val();
    console.log(userAnswer9);
    userAnswer10 = $("input[name='q10']:checked").val();
    console.log(userAnswer10);

    clearTimeout(timeUp);
    
    endGame();
    // finish the game on a user click
  });

  // function that automatically ends the game when timeRemaining is at 0
  function timeUp() {
    $(".timeLeft").text("Time's up!");
    endGame();
  }

  // function that checks the answers and displays relative information
  function endGame() {
    if (userAnswer1 == answer1) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
    }

    if (userAnswer2 == answer2) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer3 == answer3) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer4 == answer4) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer5 == answer5) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer6 == answer6) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer7 == answer7) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer8 == answer8) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer9 == answer9) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }

    if (userAnswer10 == answer10) {
      correctAnswer++;
      $(".correctResults").text("Correct: " + correctAnswer);
    } else {
      incorrectAnswer++;
      $(".incorrectResults").text("Incorrect: " + incorrectAnswer);
    }
  }

});
