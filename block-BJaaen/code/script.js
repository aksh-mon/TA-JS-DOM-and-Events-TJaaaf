// Define variables to store the game elements and user score
const options = document.querySelectorAll('.option');
const resultEl = document.querySelector('.result');
const resetButton = document.querySelector('#reset-button');
let userScore = 0;
let computerScore = 0;
let round = 1;

// Define a function to generate a random computer selection
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
      return 'It\'s a tie! 🪙';
    } else if (
      (userSelection === 'rock' && computerSelection === 'scissors') ||
      (userSelection === 'paper' && computerSelection === 'rock') ||
      (userSelection === 'scissors' && computerSelection === 'paper')
    ) {
      userScore++;
      return 'You win!🕺';
    } else {
      computerScore++;
      return 'Computer wins!🖥️';
    }
  }

  options.forEach(option => {
    option.addEventListener('click', () => {
      const userSelection = option.getAttribute('data-option');
      const computerSelection = computerPlay();
      const result = playRound(userSelection, computerSelection);
      resultEl.innerHTML += `
        <div class="result-item">
          <h2>Round ${round}</h2>
          <h2>You played ${userSelection}</h2>
          <h2>The computer played ${computerSelection}</h2>
          <h2>${result}</h2>
        </div>
      `;
      round++;
      if (round > 5) {
        let gameResult = '';
        if (userScore > computerScore) {
          gameResult = 'You win! 🕺';
        } else if (userScore < computerScore) {
          gameResult = 'Computer wins! 🖥️';
        } else {
          gameResult = 'It\'s a tie! 🪙 ';
        }
        resultEl.innerHTML += `
          <div class="result-item">
            <h2>Game over!</h2>
            <h2>Your score: ${userScore}</h2>
            <h2>Computer score: ${computerScore}</h2>
            <h2>${gameResult}</h2>
          </div>  
        `;
        round = 1;
        userScore = 0;
        computerScore = 0;
      }
    });
  });
  