$(document).ready(function() {

	var wincounter = 0;
	var losecounter = 0;
 
	// Function that created the random number that needs to be landed on
	function randomNumber() {
		var randomNumber = Math.floor(Math.random()*(112 - 19) + 19);
		$("#guessbox").html("<h1>" + randomNumber + "</h1>");
		console.log(randomNumber);
	};
	// Sets the crystals with a random number between 1 and 12
	var blueNumber = function() {return Math.floor(Math.random() * 13); }; 
	var greenNumber = function() {return Math.floor(Math.random() * 13); };
	var yellowNumber = function() {return Math.floor(Math.random() * 13); };
	var redNumber = function() {return Math.floor(Math.random() * 13); };

// creates click function for the buttons that push 1-12 number into crystal. 
	$("#blueButton").on("click", function() {
		$(this).data("num",blueNumber() );
		console.log($(this).data("num"));
	});
	$("#greenButton").on("click", function() {
		$(this).data("num",greenNumber() );
	});
	$("#yellowButton").on("click", function() {
		$(this).data("num",yellowNumber() );
	});
	$("#redButton").on("click", function() {
		$(this).data("num",redNumber() );
	});

	$("#blueButton").data("#currentscore")


	// function to add numbers together on clicks in the currentscorebox to 
	function addCurrentScore () {

	}








	randomNumber();
});






