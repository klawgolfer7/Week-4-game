$(document).ready(function() {

	var winCounter = 0;
	var loseCounter = 0;
	var randomNumber;
	var crystalSum;
 
	// Function that created the random number that needs to be landed on
	function randomNumber() {
		randomNumber = Math.floor(Math.random()*(112 - 19) + 19);
		$("#guessbox").html("<h2>Number to land on: </h2>" + "<h1>" + randomNumber + "</h1>");
		console.log(randomNumber);
	};
	// Calls randomNumber function to initiate random number
	randomNumber();
	// Sets the crystals with a random number between 1 and 12
	blueNumber = Math.floor(Math.random() * 13); 
	greenNumber = Math.floor(Math.random() * 13); 
	yellowNumber = Math.floor(Math.random() * 13); 
	redNumber = Math.floor(Math.random() * 13); 


	crystalSum = 0;

	function addNumberToButtons () {
	// creates click function for the buttons that push 1-12 number into crystal. 
		$("#blueButton").on("click", function() {
			crystalSum = Number(crystalSum) + Number(blueNumber);
			$("#currentScore").html(crystalSum)
			gameComplete();
		});
		$("#greenButton").on("click", function() {
			crystalSum = Number(crystalSum) + Number(greenNumber);
			$("#currentScore").html(crystalSum);
			gameComplete();
		});
		$("#yellowButton").on("click", function() {
			crystalSum = Number(crystalSum) + Number(yellowNumber);
			$("#currentScore").html(crystalSum);
	 		gameComplete();
		});
		$("#redButton").on("click", function() {
			crystalSum = Number(crystalSum) + Number(redNumber);
			$("#currentScore").html(crystalSum);
			gameComplete();
		});
	}

	addNumberToButtons();

	function gameComplete() {
		if (crystalSum === randomNumber) {
			winCounter++;
			$("#wins").html(winCounter);
			alert("You have great math skills! Nice job on the win!");
			crystalSum = 0;
			$("#currentScore").html(crystalSum);
			randomNumber = Math.floor(Math.random()*(112 - 19) + 19);
			$("#guessbox").html("<h2>Number to land on: </h2>" + "<h1>" + randomNumber + "</h1>");



		};	

		if (crystalSum > randomNumber) {
			loseCounter++;
			$("#losses").html(loseCounter);
			alert("Sorry you lost. No crystals for you!");
			crystalSum = 0;
			$("#currentScore").html(crystalSum);
			randomNumber = Math.floor(Math.random()*(112 - 19) + 19);
			$("#guessbox").html("<h2>Number to land on: </h2>" + "<h1>" + randomNumber + "</h1>");
			document.getElementByClassName("col-md-1").removeAttribute("")
			addNumberToButtons();

		}
	};



});