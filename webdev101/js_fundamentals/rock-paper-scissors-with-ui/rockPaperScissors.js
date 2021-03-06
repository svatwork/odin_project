let computerPlay = () => {
  let random = Math.random();
  if (random < 0.3) {
    return "Rock";
  }
  else if (random >= 0.3 && random <= 0.6) {
    return "Paper";
  }
  else {
    return "Scissors";
  }
} 

let playRound = (playerSelection, computerSelection) => {
  let playerSelectionSanitized = playerSelection.toLowerCase();
  playerSelectionSanitized = playerSelectionSanitized[0].toUpperCase() + playerSelectionSanitized.slice(1);
  
  if (playerSelectionSanitized === computerSelection) {
    return ["You draw!", 0];
  }
  else if (playerSelectionSanitized === "Rock" && computerSelection === "Paper") {
    return ["You lose! Paper beats rock.", -1];
  }
  else if (playerSelectionSanitized === "Rock" && computerSelection === "Scissors") {
    return ["You win! Rock beats scissors.", 1];
  }
  else if (playerSelectionSanitized === "Paper" && computerSelection === "Rock") {
    return ["You win! Paper beats Rock.", 1];
  }
  else if (playerSelectionSanitized === "Paper" && computerSelection === "Scissors") {
    return ["You lose! Scissors beats paper.", -1];
  }
  else if (playerSelectionSanitized === "Scissors" && computerSelection === "Rock") {
    return ["You lose! Rock beats paper.", -1];
  }
  else if (playerSelectionSanitized === "Scissors" && computerSelection === "Paper") {
    return ["You win! Scissors beats paper.", 1];
  }
  else {
      return ["Error! Please spell either rock, paper or scissors.", 0];
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const output = playRound(e.srcElement.id, computerPlay());
    document.getElementById('result').innerHTML = output[0];

    if (output[1] === -1) {
      document.getElementById('computerScore').innerHTML = parseInt(document.getElementById('computerScore').innerHTML) + 1;
    }
    else if (output[1] === 1) {
      document.getElementById('playerScore').innerHTML = parseInt(document.getElementById('playerScore').innerHTML) + 1;
    }

    if (parseInt(document.getElementById('computerScore').innerHTML) === 5) {
      document.getElementById('result').innerHTML = "Game over! Computer wins."
    }
    else if (parseInt(document.getElementById('playerScore').innerHTML) === 5) {
      document.getElementById('result').innerHTML = "Congratulations! Player wins."
    }
  });
});