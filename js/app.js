var answer
var guess
var numGuess = 0

$(document).ready(function(){
	
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").on("click", newGame);

  	$("#guessButton").on("click", Uguess);

 });

 function newGame(){
 	event.preventDefault();
 	numGuess = 0;
 	guess = 0;
 	$("#count").text(numGuess);
 	$("#feedback").text("Make your Guess!");
  	answer = Math.floor(Math.random()*101);
  	console.log(answer);
 	}

function Uguess(){
	event.preventDefault();
  	guess = +$("#userGuess").val();
  	if(isNaN(guess) || $.trim(guess) == '' || guess > 100 || guess < 1) {
  		$("#feedback").text("Enter a number between 1-100");
  		} else {
  			numGuess++;
  			$("#count").text(numGuess);
  			evalGuess(guess);
  			}
  	console.log(guess, numGuess);
		}

function evalGuess(){
	event.preventDefault();
	if(Math.abs(answer - guess) == 0) {
		$("#feedback").text("Correct!");
		$("#guessList").append('<li>' + guess + '</li>');		
	}
	else if(Math.abs(answer - guess) < 10) {
		$("#feedback").text("Hottest");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 20) {
		$("#feedback").text("Hotter");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 30) {
		$("#feedback").text("Hot");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 40) {
		$("#feedback").text("Cold");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 60) {
		$("#feedback").text("Colder");	
		$("#guessList").append('<li>' + guess + '</li>');	
	}
	else if(Math.abs(answer - guess) < 100) {
		$("#feedback").text("Coldest");	
		$("#guessList").append('<li>' + guess + '</li>');	
	}
}