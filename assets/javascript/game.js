//global functions
// set up event listener, and initialize game
function gameInit(dict){
	document.addEventListener("keydown", function(event) {
		if (hangmanGame.gameActive){
			var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    		hangmanGame.guessLetter(userInput.toLowerCase());
    	}
	});
	document.querySelector(".newGame").addEventListener("click", function(event){
		hangmanGame.newGame(dict);
	});

	hangmanGame.newGame(dict);
}

// the game Object
var hangmanGame = {
	// this gets definted by the game init function
	dictionary : [],

	// an array to keep track of how much of the hangman is flayed
	bodyParts : [
		// left leg flayed?
		false,
		// right leg flayed?
		false,
		//right arm flayed?
		false,
		// left arm flayed?
		false,
		// torso flayed?
		false,
		// head flayed?
		false
	],

	// keep track of incorrect letters guessed
	guessedWrongLetters : [],

	// keep track of incorrect letters guessed
	guessedRightLetters : [],

	// word the user is currently trying to guess
	currentAnswer : "",
	currentAnswerIndex : 0,
	guessesLeft : 0,
	wins : 0,
	losses : 0,
	gameActive : 0,

	// METHODS

	newGame : function(dict){
		// reset game arrays
		for (var i = 0; i < this.bodyParts.length; i++) {
			this.bodyParts[i] = false;
		}
		this.guessedWrongLetters = [];
		this.guessedRightLetters = [];
		this.guessesLeft = this.bodyParts.length;
		this.dictionary = dict;
		this.gameActive = true;
		// choose a word
		this.currentAnswerIndex = Math.floor(Math.random() * this.dictionary.length);
		this.currentAnswer = this.dictionary[this.currentAnswerIndex].word.toLowerCase();
		document.querySelector('.wordCategory').innerHTML = "Category: " + this.dictionary[this.currentAnswerIndex].category;
		console.log("answer: " + this.currentAnswer);
		//reset display
		this.displayBlanks();
		this.displayHangman();
		this.displayScore();

		document.querySelector('.gameOverMessage').style.display = 'none';
		document.querySelector('.turnsleft').innerHTML = this.bodyParts.length;
	},

	guessLetter : function(input){
		var position = this.currentAnswer.indexOf(input);
		if (position < 0){
			this.turnFail(input);
		} else {
			this.turnSuccess(position, input);
		}
	},

	turnFail : function(letter) {
		//console.log("turnFail");
		this.guessesLeft--;
		var isGameOver = false;
		for (var i = 0; i < this.bodyParts.length; i++) {
			if (this.bodyParts[i] === false){
				// find the first unflayed bodypart and set it to true
				this.bodyParts[i] = true;
				// exit the loop
				i = this.bodyParts.length;
			}
		}
		this.guessedWrongLetters.push(letter);

		if (this.guessesLeft == 0){
			// all body parts are now completed, game is over
				isGameOver = true; 
		}
		if (isGameOver === true){
			this.gameOver("got flayed");
		}
		this.displayHangman();
	},

	turnSuccess : function(position, letter) {
		//console.log("turnSuccess");
		// find all positions of this letter in the answer
		// I found this solution on Stack Overflow and modified it
	    var startIndex = 0;
	    var index;
	    while ((index = this.currentAnswer.indexOf(letter, startIndex)) > -1) {
	        this.guessedRightLetters[index] = letter;
	        startIndex = index + 1;
	    }

		this.displayBlanks();

	    //test to see if the game is won
	    var gameIsWon = true;
	    if (this.guessedRightLetters.length < this.currentAnswer.length) {
	    	// this is a faster check, but sometimes will be false
			gameIsWon = false;
		} else {
		    for (var i = 0; i < this.guessedRightLetters.length; i++) {
		    	if(!this.guessedRightLetters[i]){
		    		gameIsWon = false;
		    		// exit the loop
		    		i = this.guessedRightLetters.length;
		    	}
		    }
		}
	    if (gameIsWon){
		    this.gameOver("survived");
		}
	},

	displayBlanks : function(){
		var html = "";
		for(var i = 0; i < this.currentAnswer.length; i++){
			if (this.guessedRightLetters[i]){
				html += " " + this.guessedRightLetters[i] + " ";
			} else {
				html += " _ ";
			}
		}
		document.querySelector('.letterBlanks').innerHTML = html;
	},

	displayHangman : function(){
		//	console.log("displayHangman");
		var html = "<img alt='The Flayed Man' src='assets/images/flayed-man";
			if (this.guessesLeft < 6){
				html += "-"
				html += (6-this.guessesLeft);
			}
		html += ".png' \>"
		document.querySelector('.flayedMan').innerHTML = html;
		document.querySelector('.turnsleft').innerHTML = this.guessesLeft;

		// also display the wrong letters the user has already guessed
		var html2 = "<br>";
		for (var j = 0; j < this.guessedWrongLetters.length; j++) {
			html2 += this.guessedWrongLetters[j] + " ";	
		}
		document.querySelector('.guessedWrongLetters').innerHTML = html2;
	},

	displayScore : function(){
		var html = "Wins: " + this.wins + "<br>Losses: " + this.losses;
		document.querySelector('.score').innerHTML = html;
	},

	gameOver : function(result){
		//console.log("gameOver: "+result);
		// stop accepting keystroke events
		this.gameActive = false;
		if (result == "survived"){
			this.wins++;
		} else {
			this.losses++;
		}
		this.displayScore();
		document.querySelector('.resultText').innerHTML = "You " + result + "!"
		document.querySelector('.gameOverMessage').style.display = 'block';
		document.querySelector('.gameOverImage').src = "assets/images/sorry.gif";
		//remove this word from the dictionary, so you don't get it again
		this.dictionary.splice(this.currentAnswerIndex, 1);
	}
};