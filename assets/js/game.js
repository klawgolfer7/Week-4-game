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
	blueNumber = Math.floor(Math.random() * 13);
	greenNumber = Math.floor(Math.random() * 13);
	redNumber = Math.floor(Math.random() * 13);
	yellowNumber = Math.floor(Math.random() * 13);
	console.log(blueNumber);

// creates 


///////////// First attempt crystal number generator. ///////////////
	// function crystalNumber() {
	// 	var randomNumber = Math.floor(Math.random()*9);
	// 	// document.getElementById("crystal-1").value = randomNumber;
	// 	// $("#crystal-1").value(randomNumber);
	// 	// console.log(randomNumber);
	// };


	randomNumber();
});