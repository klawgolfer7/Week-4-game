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
	var blueNumber = Math.floor(Math.random() * 13);
	var greenNumber = Math.floor(Math.random() * 13);
	var yellowNumber = Math.floor(Math.random() * 13);
	var redNumber = Math.floor(Math.random() * 13);
	console.log(blueNumber);

// creates click function for the buttons that . 
	$("#blueButton").on("click" function() {
		$(this).attr("blueNumber")
	});
	$("#redButton").on("click" function() {
		$(this).attr("greenNumber")
	});
	$("#yellowButton").on("click" function() {
		$(this).attr("yellowNumber")
	});
	$("#greenButton").on("click" function() {
		$(this).attr("redNumber")
	});


	randomNumber();
});