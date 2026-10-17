console.log("Welcome to a Rock Paper Scissors console game.");

// Get computer choice
function getComputerChoice() {
     // Use math.random to make random number between 0 and 1. 
    const randomNum = Math.random();
    // Take random number and return rock paper or scissors depending on value
    if (randomNum < 0.33337){
        console.log("Computer chose rock.");
        return "rock";
    } else if (randomNum < 0.667){
        console.log("Computer chose paper.");
        return "paper";
    } else if (randomNum <= 1){
        console.log("Computer chose scissors.")
        return "scissors";
    }
    else {
        return "something went wrong";
    }
}

// Get human choice
function getHumanChoice() {
    // Propmt for choice, ask rock paper or scissors.
    // Store response in response.
    const response = prompt("Rock, paper, or scissors?", "");
    // Make case insensitive then return result.
    console.log("You chose " + response);
    return response.toLowerCase(); 
}

// Total humanScore variable starting at 0
let humanScore = 0;
// Total computerScore variable starting at 0
let computerScore = 0;

// Write playRound function that takes arguments humanChoice and computerChoice.
function playRound(computerChoice, humanChoice){
    // If statement for what to say for values what wins and log to console.log.
    // IF both choices are the same it's a tie.
    if (computerChoice === humanChoice) {
        console.log("Tie!");
    // If computer chooses rock do this.
    } else if (computerChoice === "rock") { 
        // If the human choice is paper it's a win. Log and increase score.
        if (humanChoice === "paper"){
            console.log("You win!");
            // Increase human score for win.
            humanScore++;
        }
        // If the human chooses scissors it's a lose.
        else if (humanChoice === "scissors") {
            console.log("You lose!");
            // Increase computer score for win.
            computerScore++;
        } 
    }
    // Same as above but for paper.   
    else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            console.log("You lose!");
            computerScore++;
        } else if(humanChoice ==="scissors") {
            console.log("You win!");
            humanScore++;
        }
    }
    // Same as above but for scissors.
    else if (computerChoice === "scissors") {
        if (humanChoice === "rock") {
            console.log("You win!");
            humanScore++;
        } else if(humanChoice === "paper") {
            console.log("You lose!");
            computerScore++;
        }
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (computerSelection, humanSelection);
console.log("Human Score " + humanScore);
console.log("Computer Score " + computerScore);

// Create variables for selections made
// Call playRound and pass in selections.
// Logic to play 5 rounds and then declare winner. 
// Variable to track how many rounds have been played starting at 0    