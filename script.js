const computerChoices = ["rock", "paper", "scissors"];
const playerResult = document.getElementById("playerResult");
const computerResult = document.getElementById("computerResult");
const gameResult = document.getElementById("gameResult");

// Function that plays a round of Rock, Paper, Scissors every time the user presses a button
function playGame(playerSelection){
    // Select a random choice out of an array to use as the computer's play.
    const computerSelection = computerChoices[Math.floor(Math.random() * 3)]
    let result ="";
    if (playerSelection === computerSelection) 
    {
        result = "IT'S A TIE!";
    } else {
        switch (playerSelection) {
            case "rock":
                result = (computerSelection === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerSelection === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerSelection === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            }
    }
    playerResult.textContent = `PLAYER:  ${playerSelection}`;
    computerResult.textContent = `COMPUTER:  ${computerSelection}`;
    gameResult.textContent = result;

    // With each new game, reset the color back to the original
    gameResult.classList.remove("greenWinText", "redLosingText");

    /*Change the color of the text to green if the user wins 
    and red if the user loses*/
    switch (result){
        case "YOU WIN!":
            gameResult.classList.add("greenWinText");
            break;
        case "YOU LOSE!":
            gameResult.classList.add("redLosingText");
            break;
    }
}
