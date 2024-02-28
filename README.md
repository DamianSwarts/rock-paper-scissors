# rock-paper-scissors
```markdown
# Rock, Paper, Scissors Game

This is a simple implementation of the classic game Rock, Paper, Scissors.

## How to Play

The game is played against the computer. The computer makes a random choice between rock, paper, and scissors. The player makes their choice by calling the `playGame` function with their choice as a string argument (either "rock", "paper", or "scissors").

## Game Rules

- Rock beats Scissors
- Scissors beat Paper
- Paper beats Rock

If both the player and the computer make the same choice, it's a tie.

## Game Display

The game displays the choices made by the player and the computer, as well as the result of the game (win, lose, or tie), in the browser's console.

## Scoring

The game keeps track of the player's and the computer's scores. The first to reach 5 points wins the game. After a game ends, the scores are reset, and a new game begins.

## Functions

- `playGame(playerSelection)`: This function starts a game. The player's choice is passed as an argument.
- `capitalize(string)`: This function capitalizes the first letter of a string.
- `restartGame()`: This function resets the game by setting the scores to 0.

Enjoy the game!
```