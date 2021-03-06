////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (move) =
    return ;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
    return ;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === 'rock' && computerMove === 'scissors') {
        playerWins++;
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player'
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player'
    } else if (computerMove === 'rock' && playerMove === 'scissors') {
        winner = 'computer'
    } else if (computerMove === 'paper' && playerMove === 'rock') {
        winner = 'computer'
    } else if (computerMove === 'scissors' && playerMove === 'paper') {
        winner = 'computer'
    } else if (playerMove === 'rock' && computerMove === 'rock') {
        winner = 'tie'
    } else if (playerMove === 'paper' && computerMove === 'paper') {
        winner = 'tie'
    } else if (playerMove === 'scissors' && computerMove === 'scissors') {
        winner = 'tie'
    }

    return winner;
}

var playerWins = 0;
var computerWins = 0;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    getInput();
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    if (playerWins === 5) {
        winner = 'player'
    } else if (computerWins === 5) {
        winner = 'computer'
    }
    return [playerWins, computerWins];
}

