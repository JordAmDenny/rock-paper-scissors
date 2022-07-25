function getComputerChoice {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomChoice = Math.floor(Math.random() * choices.length);
  return randomChoice();
  }

const computerSelection = getComputerChoice()

function playGame (playerSelection, computerSelection) {
  if (playerSelction == 'Rock' && computerselction == 'Scissors' || playerSelction == 'Paper' && computerselction == 'Rock' || playerSelction == 'Scissors' && computerselction == 'Paper') {
    return "You Win!"};
  else if (playerSelction == 'Rock' && computerselction == 'Paper' || playerSelction == 'Paper' && computerselction == 'Scissors' || playerSelction == 'Scissors' && computerselction == 'Rock') {
    return "You Lose!"};
  else {
    return "Draw"
  }
}
