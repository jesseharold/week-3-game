// all possible words to guess
// keep this as a global variable and pass it in
// so you could reuse the code to play with different dictionaries
// could define this in a different js file, too
var gameOfThronesDictionary = [
	"Jaime",
	"Cersei",
	"Tyrion",
	"Blackfish",
	"Sansa",
	"Arya",
	"Summer",
	"Winter",
	"Others",
	"Dothraki",
	"Valyrian",
	"Targaryen",
	"Direwolf",
	"Lannister",
	"Riverrun",
	"Winterfell",
	"Dreadfort",
	"Mereen",
	"Sunspear",
	"Clegane",
	"Dragonfire",
	"Stoneheart",
	"Hodor",
	"Coldhands",
	"Mormont",
	"Longclaw"
];

//global functions
// set up event listener, and initialize game
function gameInit(dict){
	document.addEventListener('keydown', function(event) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    	hangmanGame.guessLetter(userInput.toLowerCase());
	});
	hangmanGame.newGame(dict);
}

// the game Object
var hangmanGame = {
	// this gets definted by the game init function
	dictionary : [],

	// what to display when a part gets hung, replace these w images later?
	bodyParts : ["head", "torso", "right arm", "left arm", "right leg", "left leg"],

	// keep track of how much of the hangman is hung
	hangman : [false, false, false, false, false, false],

	// keep track of incorrect letters guessed
	guessedWrongLetters : [],

	// keep track of incorrect letters guessed
	guessedRightLetters : [],

	// word the user is currently trying to guess
	currentAnswer : "",

	// stop the game from registering key presses at some times
	waitingForAGuess : true,

	// METHODS

	newGame : function(dict){
		this.dictionary = dict;
		var rand = Math.floor(Math.random() * this.dictionary.length);
		this.currentAnswer = this.dictionary[rand].toLowerCase();
		console.log("answer: " + this.currentAnswer);
		this.displayBlanks();
		this.waitingForAGuess = true;
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
		document.querySelector('#letterBlanks').innerHTML = html;
	},

	guessLetter : function(input){
		// don't process the keypress if game isn't in the right state
		if (this.waitingForAGuess === true){
			var position = this.currentAnswer.indexOf(input);
			if (position < 0){
				this.turnFail(input);
			} else {
				this.turnSuccess(position, input);
			}
		}
	},

	turnFail : function(letter) {
		console.log("turnFail");
		this.guessedWrongLetters.push(letter);
		var isGameOver = false;
		for (var i = 0; i < this.hangman.length; i++) {
			if(this.hangman[i] === false){
				// find the first false item in the array, make it true
				this.hangman[i] = true;
				// then exit the loop
				i = this.hangman.length;
			}
			if (i === (this.hangman.length-2)){
				// this is the last loop, which means
				// all body parts are now completed, game is over
					isGameOver = true; 
			}
		}
		this.displayHangman();
		if (isGameOver === true){
			this.gameOver("lose");
		}
	},

	turnSuccess : function(position, letter) {
		console.log("turnSuccess");
		// find all positions of this letter in the answer
		// I found this solution on Stack Overflow and modified it
	    var startIndex = 0;
	    var index;
	    while ((index = this.currentAnswer.indexOf(letter, startIndex)) > -1) {
	        this.guessedRightLetters[index] = letter;
	        startIndex = index + 1;
	    }
	    //console.log(guessedRightLetters);

		this.displayBlanks();

	    //test to see if the game is won
	    var gameIsWon = true;
	    if (this.guessedRightLetters.length < this.currentAnswer.length) {
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
		    this.gameOver("win");
		}
	},

	displayHangman : function(){
	//	console.log("displayHangman");
		var html = "noose";
		for (var i = 0; i < this.hangman.length; i++) {
			if(this.hangman[i] === true){
				html += "<br>Display " + this.bodyParts[i];
			}
		}
		document.querySelector('#hangman').innerHTML = html;

		// also display the wrong letters the user has already guessed
		var html2 = "You guessed: <br>";
		for (var j = 0; j < this.guessedWrongLetters.length; j++) {
			html2 += this.guessedWrongLetters[j] + " ";	
		}
		document.querySelector('#guessedWrongLetters').innerHTML = html2;
	},

	gameOver : function(result){
		console.log("gameOver: "+result);
		this.waitingForAGuess = false;
	}
};

gameInit(gameOfThronesDictionary);