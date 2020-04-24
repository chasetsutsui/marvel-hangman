var answers = ["spiderman", "hulk", "thor", "wolverine", "groot"];
var currentAnswer = "";
var lettersInAnswer = [];
var blanks = 0;
var lettersAndBlanks = [];
var wrongGuesses = [];


var wins = 0;
var losses = 0;
var guessesLeft = 8; 


function hangman() {
    currentAnswer = answers[Math.floor(Math.random() * answers.length)];
    lettersInAnswer = currentAnswer.split("");
    blanks = lettersInAnswer.length;
    wrongGuesses = [];

    guessesLeft = 8;
    wrongGuesses = [];
    lettersAndBlanks = [];

    for (var i = 0; i < blanks; i++){
        lettersAndBlanks.push("_");
    }

    document.getElementById("answer").innerHTML = lettersAndBlanks.join("  ");
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;


    console.log(blanks);
    console.log(lettersInAnswer);
    console.log(currentAnswer);
    console.log(lettersAndBlanks);
}

function compareGuess(letter) {
    
    var correctLetter = false;
  
    for (var i = 0; i < blanks; i++) {
        if (currentAnswer[i] == letter) {
            correctLetter = true;
            
        }
    }
    if (correctLetter) {
        for (var i = 0; i < blanks; i++) {
            if (currentAnswer[i] == letter) {
                lettersAndBlanks[i] = letter;
            }
        }
    }
    else {
        wrongGuesses.push(letter);
        guessesLeft--
    }
    console.log(lettersAndBlanks);
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("answer").innerHTML = lettersAndBlanks.join("  ");
    document.getElementById("lettersGuessed").innerHTML = wrongGuesses.join(" ");
    
}
function roundComplete() {
    console.log("wins: " + wins + "  loses: " + losses + "  guesses left: " + guessesLeft)
    
    if (lettersInAnswer.toString() == lettersAndBlanks.toString()) {
        wins++;
        alert("You Won");

        document.getElementById("wins").innerHTML = wins;
        

        hangman();
    }

    if (guessesLeft === 0) {
        losses++;
        alert("You Lost");
        document.getElementById("losses").innerHTML = losses;

        hangman();
    }
}

hangman();

document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    compareGuess(guess);
    roundComplete();


    console.log(guess);
}