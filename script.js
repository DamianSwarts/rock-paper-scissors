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
    if (playerSelection === computerSelection) 
    {
        result = "tie";
        return result;
    } else if (
        playerSelection === "rock" && computerSelection === "Paper" ||
        playerSelection === "paper" && computerSelection === "Scissors" || 
        playerSelection === "scissors" && computerSelection === "Rock")
    {
        result = "computer won";
        return result;
    } else if (
        playerSelection === "rock" && computerSelection === "Scissors" ||
        playerSelection === "paper" && computerSelection === "Rock" || 
        playerSelection === "scissors" && computerSelection === "Paper")
    {
        result = "player won";
        return result;     
    } 
}

/* Create a new function playGame() that uses the playRound() function inside it to play a five round game.
The function keeps score and reports a winner at the end. */

function playGame(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < rounds; i++) {
        const computerChoice = getComputerChoice();
        let playerChoice = prompt("Choose your weapon: Rock, Paper or Scissors?");
        
        let result = playRound(playerChoice, computerChoice);
        if(result === "player won") {
            playerScore++;
            console.log("You won this round!");
        } else if(result === "computer won") {
            computerScore++;
            console.log("Computer won this round!");
        } else {
            console.log("Oops! It's a tie!");
        }
    }

    if(playerScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer won the game!");
    } else if (playerScore === computerScore) {
        console.log("The game ended in a tie!");
    }
}

playGame(5);