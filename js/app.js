
/***** Functions & Variables *****/


  /*** Computer Randomly Generates Answer ***/
function selectAnswer () {
	var selectedAnswer = Math.floor(Math.random()*101);
	return selectedAnswer;
	}


  /*** Variables ***/

/* number input by user */
var guessedNumber;

/* how many guesses by user */
var guessCount = 0;

/*number chosen at random by computer */
var randomNumber;



/*** Functions ***/

/* Tracks Number of Guesses */

function trackGuessCount () {
	guessCount++;
	$("#count").text(guessCount);
}

/* Tracks Number User Has Already Guessed */

function trackGuess () {
	$("#guessList").append('<li>' +guessedNumber+ '</li>')
}

/* Clears Guess Count */

function clearCount () {
	$("#count").text(0);
	var guessCount = 0;

}

/* Clears List of Guesses */

function clearGuess () {
	$("#guessList").empty();
}

/* Clears Input Field */

function clearInput () {

$("#userGuess").val('');

}


/* Starts New Game */

function newGame () {

	function clearCount ();
	function clearInput ();
	function clearGuess ();
	randomNumber = selectAnswer();
}


/***** Hot and Cold Game *****/

function playGame () {

	var guessedNumber = $("#userGuess").val();

	var guessCompare = (Math.abs(guessedNumber - selectedAnswer);


	if (guessCompare === 0) {
		$("#feedback").text("Congrats! You guessed correctly. Click on New Game to start over");
	}

	else if (guessCompare >= 41) {
		$("#feedback").text("You're ice cold!");

	}

	else if (guessCompare >=25 && <=40) {
		$("#feedback").text("You're cold! Try again");
	}

	else if (guessCompare >=15 && <=24) {
		$("#feedback").text("You're getting warmer!");
	}

	else if (guessCompare >=1 && <=14) {
		$("#feedback").text("Burning up!");
	}


}





$(document).ready(function(){

/*--- When page loads, a new game starts ---*/

 // function newGame ();

/*--- User inputs guess and clicks guess button, game starts---*/

	$("form").submit(function(event) {

		guessedNumber = ("#userGuess").val();
		playGame ();
		trackGuessCount ();
		trackGuess ();
		clearInput ();



	});

	

/*--- Display information modal box ---*/
  $(".what").click(function(){
   	$(".overlay").fadeIn(1000);

  	});

/*--- Hide information modal box ---*/
  $("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	
  	});





});