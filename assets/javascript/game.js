
// all possible words to guess
var dictionary = [
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

// keep track of how much of the hangman is hung
var bodyParts = ["head", "torso", "right arm", "left arm", "right leg", "left leg"];
var hangman = [false, false, false, false, false, false];

// keep track of letters already guessed, not in word
var guessedLetters = [];

// word the user is currently trying to guess
var currentAnswer = "";

// stop the game from registering key presses at some times
var waitingForAGuess = true;

function gameInit(){
	document.addEventListener('keydown', function(event) {
		if (waitingForAGuess){
	    	waitingForAGuess = false;
			var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	    	console.log(userInput);
	    	guessLetter(userInput.toLowerCase());
	    }
	});

	newGame();
}

function newGame(){
	var rand = Math.floor(Math.random() * dictionary.length);
	currentAnswer = dictionary[rand].toLowerCase();
	console.log("answer: " + currentAnswer);
}

function guessLetter(input){
	var position = currentAnswer.indexOf(input);
	if (position < 0){
		turnFail(input);
	} else {
		turnSuccess(position);
	}
	waitingForAGuess = true;
}

function turnFail(letter) {
	console.log("turnFail");
	guessedLetters.push(letter);
	var isGameOver = false;
	for (var i = 0; i < hangman.length; i++) {
		if(hangman[i] === false){
			// find the first false item in the array, make it true
			hangman[i] = true;
			// then exit the loop
			i = hangman.length;
		}
		if (i === (hangman.length-2)){
			// this is the last loop, which means
			// all body parts are now completed, game is over
				isGameOver = true; 
		}
	}
	displayHangman();
	if (isGameOver === true){
		gameOver();
	}
}

function turnSuccess(letter) {
	console.log("turnSuccess");

}

function displayHangman(){
//	console.log("displayHangman");
	for (var i = 0; i < hangman.length; i++) {
		if(hangman[i] === true){
			console.log("Display " + bodyParts[i]);
		}
	}
}

function gameOver(){
	console.log("gameOver");
}

gameInit();