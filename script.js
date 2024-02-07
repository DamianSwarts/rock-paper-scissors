/* Create a function getComputerChoice() that randomly returns either "Rock", "Paper" or "Scissors". 
The random string returned will be used for the computer's play */

function getComputerChoice(){
    let myArray = ["Rock", "Paper", "Scissors"];
    
    return(myArray[(Math.floor(Math.random() * myArray.length))]);   
}