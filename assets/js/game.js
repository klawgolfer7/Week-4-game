$(document).ready(function() {


	var counter = 0 

	function randomNumber() {
		var randomNumber = Math.floor(Math.random()*112);
		$("#guessbox").html("<h1>" + randomNumber + "</h1>");
		console.log(randomNumber);
	};

	function crystalNumber() {
		var randomNumber = Math.floor(Math.random()*9);
		document.getElementById("crystal-1").value = randomNumber;
		// $("#crystal-1").value(randomNumber);
		console.log(randomNumber);
	};




	crystalNumber();
	randomNumber();
});