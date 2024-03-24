// DOM Elements
const userScore = document.querySelector("#player");
const cpuScore = document.querySelector("#cpu");
const totalUserScore = document.querySelector("#user-score");
const totalCpuScore = document.querySelector("#cpu-score");
const msgContainer = document.querySelector(".msg-container");
const message = document.querySelector("#message");
const winningMsg = document.querySelector("#winning-msg");
const choices = document.querySelectorAll(".choose");
const restart = document.querySelector("#restart");

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

// Getting randomized CPU choice
const getComputerChoice = () => {
  const RPS = ['rock', 'paper', 'scissors'];
  const randomRPS = Math.floor(Math.random() * RPS.length);
  return RPS[randomRPS];
};

const playRound = (playerSelection) => {
  const computerSelection = getComputerChoice();

  let resultMessage;

  const outcomes = {
    rock: { beats: 'scissors', message: 'Rock beats Scissors' },
    paper: { beats: 'rock', message: 'Paper beats Rock' },
    scissors: { beats: 'paper', message: 'Scissors beats Paper' }
  };

  if (playerSelection === computerSelection) {
    resultMessage = 'Tie! Please go again';
  } else if (outcomes[playerSelection].beats === computerSelection){
    resultMessage = `You win! ${outcomes[playerSelection].message}`;
    playerScore++;
  } else {
    resultMessage = `You Lose! ${outcomes[computerSelection].message}`;
    computerScore++;
  };

  message.textContent = resultMessage;
  msgContainer.appendChild(message);

  if (playerScore === winningScore) {
    message.textContent = "You won the Game!";
    message.style.color = 'red';
  } else if (computerScore === winningScore) {
    message.textContent = "Computer won the Game!";
    message.style.color = 'red';
  };

  totalUserScore.textContent = playerScore;
  totalCpuScore.textContent = computerScore;
  cpuScore.appendChild(totalCpuScore);
  userScore.appendChild(totalUserScore);
  msgContainer.appendChild(message);

};

// Restarts or ends game 
const endGame = () => {
  totalUserScore.textContent = 0;
  totalCpuScore.textContent = 0;
  message.textContent = '';
  message.style.color = 'rgb(119, 167, 167)';
  playerScore = 0;
  computerScore = 0;
};

restart.addEventListener("click", () => {
  endGame();
});

// Start game
const playGame = () => {
  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      if (playerScore === winningScore || computerScore === winningScore) {
        endGame();
      };
      
      const playerSelection = choice.id;
      playRound(playerSelection);
    });
  });
};

playGame();
