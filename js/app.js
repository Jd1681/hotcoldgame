var answer
var guess
var numGuess = 0

$(document).ready(function(){
	
	newGame();

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/ *--- Hide information modal box ---*/
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
 	$("#userGuess").val('');
 	$("#guessList").find("li").remove();
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
		document.getElementById("feedback").style.backgroundColor = 'rgb(255, 0, 0)';
		$("#feedback").text("Correct!");
		$("#guessList").append('<li>' + guess + '</li>');		
	}
	else if(Math.abs(answer - guess) < 5) {
		document.getElementById("feedback").style.backgroundColor = 'rgb(198, 0, 57)';
		$("#feedback").text("Hottest");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 18) {
		document.getElementById("feedback").style.backgroundColor = 'rgb(170, 0, 85)';
		$("#feedback").text("Hotter");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 30) {
		document.getElementById("feedback").style.backgroundColor = 'rgb(142, 0, 113)';
		$("#feedback").text("Hot");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 40) {
		document.getElementById("feedback").style.backgroundColor = 'rgb(85, 0, 170)';
		$("#feedback").text("Cold");
		$("#guessList").append('<li>' + guess + '</li>');
	}
	else if(Math.abs(answer - guess) < 60) {
		document.getElementById("feedback").style.backgroundColor = 'rgb(57, 0, 198)';
		$("#feedback").text("Colder");	
		$("#guessList").append('<li>' + guess + '</li>');	
	}
	else if(Math.abs(answer - guess) < 100) {
		$("#feedback").text("Coldest");	
		document.getElementById("feedback").style.backgroundColor = 'rgb(0, 0, 255)';
		$("#guessList").append('<li>' + guess + '</li>');	
	}
}