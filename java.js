const choices = ["rock", "paper", "scissors"];
let playerScore = 0
let comScore = 0

function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let computerSelection = getComputerChoice();
let playerSelection = "rock";

function playGame (playerSelection, computerSelection) {

  if (playerSelection === computerSelection) {
    return "Tie Game"
  } 
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper")
  ){
       playerScore += 1
      console.log("You Win, you have a score of " +  playerScore)
      if (playerScore == 5) {
      console.log("You take the best of 5")
      }
  } 
  if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") || 
      (playerSelection === "scissors" && computerSelection === "rock")
  ) 
    {
        comScore +=1
        console.log("Computer takes this round, it has a score of " + comScore)
      if (comScore == 5) {
        console.log("Computer wins the set")
      }
 }
}


restart.addEventListener('click', restartGame)


function gameOver() {
  return playerScore === 5 || comScore === 5 
}

function restartGame() {
  playerScore = 0
  comScore = 0
}

//function game(playGame()) {
  //let playerScore = 0
  //let comScore = 0

  //for (let i = 0; i < 5; i++)
  //if 

//}