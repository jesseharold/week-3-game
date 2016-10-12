# week-3-game
A game of Hangman, written in JavaScript and CSS

http://still-gorge-96730.herokuapp.com/

Note: the solution is displayed in the console so you can test it without being a Game of Thrones geek. :)


FEATURES DONE:
    
    Use key events to listen for the letters that your players will type.

    Display Press any key to get started!
    If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
    As the user guesses the correct letters, reveal them: m a d o _  _ a.
    Display Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
    Display wins: (# of times user guessed the word correctly).
    Display number of Guesses Remaining: (# of guesses remaining for the user).

    Organize your game code as an object, except for the key events to get the letter guessed. 
        Save your whole game and it's properties in an object.
        Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
        Don't forget to place your global variables and functions above your object.
        Remember: global variables, then objects, then calls.
        Definitely talk with a TA or your instructor if you get tripped up during this challenge.

    After the user wins/loses, the game should automatically choose another word and make the user play it.
    (I put this on a button instead, don't want to be too pushy.)

    - separated the game logic and dictionary data for better reusablilty

    - added category to each word

    - remove word from array once it's been played

    Write some stylish CSS rules to make a design that fits your game's theme.
    Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
    
     - replace bodyparts text with images

     - add fun google fonts

     - restyled gameoverbox, paused game

    - show an image of the clue if the user guesses their word correctly 

    - background music


possible features to add:
     - change success image to loading img before showing again
     - get image dynamically using google search rather than hardcoding links?
     - hints? categorize clues as easy or hard? 
     - music doesn't autoplay in all browsers, investigate
