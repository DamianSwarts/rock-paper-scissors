/* Create a function getComputerChoice() that randomly returns either "Rock", "Paper" or "Scissors". 
The random string returned will be used for the computer's play */

function getComputerChoice(){
    let myArray = ["Rock", "Paper", "Scissors"];
    
    return(myArray[(Math.floor(Math.random() * myArray.length))]);   
}

/* Write a function that plays a single round of Rock Paper Scissors. 
The function takes two parameters - the playerSelection and computerSelection - 
and then returns a string that declares the winner or tie of the round. */

function playRound(playerSelection, computerSelection) {   
    var result;    
    if (
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper")
    {
        result = `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}.`;
        return result;     
    } else if (
        playerSelection === "rock" && computerSelection === "Paper" ||
        playerSelection === "paper" && computerSelection === "Scissors" || 
        playerSelection === "scissors" && computerSelection === "Rock")
    {
        result = `You lose! ${computerSelection} beats ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}.`;
        return result;
    } else {
        result = "This round ended in a draw."
        return result;
    }   
}

// Call the functions, prompt the user for input and display the results to the console.
let playerSelection = prompt("Choose your weapon: Rock, Paper or Scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection.toLowerCase(), computerSelection));