console.log("Welcome to a Rock Paper Scissors console game.");

// Get computer choice
function getComputerChoice() {
     // Use math.random to make random number between 0 and 1. 
    const randomNum = Math.random();
    // Take random number and return rock paper or scissors depending on value
    if (randomNum < 0.33337){
        return "rock";
    } else if (randomNum < 0.666){
        return "paper";
    } else if (randomNum <= 1){
        return "scissors";
    }
    else {
        return "something went wrong";
    }
}
console.log(getComputerChoice());
// Get human choice
    // Propmt for choice, ask rock paper or scissors.
    // Store response in humanChoice.
    // Make case insensitive.

// Total humanScore variable starting at 0

// Total computerScore variable starting at 0

// Write playRound function that takes arguments humanChoice and computerChoice.
    // If statement for what to say for values what wins and log to console.log.
    // Needs to iterate computer or human score depending on winner of round.

// Logic to play 5 rounds and then declare winner. 
// Variable to track how many rounds have been played starting at 0    