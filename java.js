const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let computerSelection = getComputerChoice();

function playGame (playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "Tie Game"
  } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") || 
            (playerSelection === "scissors" && computerSelection === "paper")) 
  { return "You Win!"
  } else    (playerSelection === "rock" && computerSelection === "paper") ||
           (playerSelection === "paper" && computerSelection === "scissors") || 
            (playerSelection === "scissors" && computerSelection === "rock") 
  { return "You Lose!"
 }
}
