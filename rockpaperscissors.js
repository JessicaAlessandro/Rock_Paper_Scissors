////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var move;
var playerMove;
var computerMove;
var winner;
var playerWins;
var computerWins;

function getPlayerMove(move) {
    return move || getInput(); 
}


function getComputerMove(move) {
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
var winner;
    if (playerMove === computerMove) {
        winner = "tie";
        console.log("Computer chooses " + computerMove);
        console.log("It's a tie!");
    } 
    else if (playerMove === "rock") {
        if (computerMove === "paper") {
            winner = "computer";
        } 
        else {
            winner = "player";
        }
        console.log("Computer chooses " + computerMove);
        console.log("The winner of this round is " + winner + "!");
    } 
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        }
        else {
            winner = "computer";
        }
        console.log("Computer chooses " + computerMove);
        console.log("The winner of this round is " + winner + "!"); 
    } 
    else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } 
        else {
            winner = "player";
        }
        console.log("Computer chooses " + computerMove);
        console.log("The winner of this round is " + winner + "!");
    } 
    else {
        getInput();
    }
    return winner;
    }

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)){
        var winner = getWinner(getPlayerMove(), getComputerMove());
        if (winner === "player") {
           playerWins ++;
        }
        else if (winner === "computer") {
           computerWins ++;
        }
    }
    if (playerWins === 5) {
       console.log("Player wins the game!");
    }
    else if (computerWins === 5) {
       console.log("Computer wins the game!");
    }
    return [playerWins, computerWins];  
}
console.log(playToFive());    
