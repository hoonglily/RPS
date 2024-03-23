const userScore = document.querySelector("#player");
const cpuScore = document.querySelector("#cpu");
const totalUserScore = document.querySelector("#user-score");
const totalCpuScore = document.querySelector("#cpu-score");

const msgContainer = document.querySelector(".msg-container");
const message = document.querySelector(".message");
const winningMsg = document.querySelector(".winning-msg");

const choices = document.querySelectorAll(".choose");
const restart = document.querySelector("#restart");


const getComputerChoice = () => {
  const RPS = ['rock', 'paper', 'scissors'];
  const randomRPS = Math.floor(Math.random() * RPS.length);
  return RPS[randomRPS];
};

let playerScore = 0;
let computerScore = 0;
let winningScore = 5;

const playRound = (playerSelection) => {
  const lowerCasePS = playerSelection.toLowerCase();
  const computerSelection = getComputerChoice();

  let resultMessage;

  const outcomes = {
    rock: { beats: 'scissors', message: 'Rock beats Scissors' },
    paper: { beats: 'rock', message: 'Paper beats Rock' },
    scissors: { beats: 'paper', message: 'Scissors beats Paper' }
  };

  if (lowerCasePS === computerSelection) {
    resultMessage = 'Tie! Please go again';
  } else if (outcomes[lowerCasePS].beats === computerSelection){
    resultMessage = `You win! ${outcomes[lowerCasePS].message}`;
    playerScore++;
  } else {
    resultMessage = `You Lose! ${outcomes[computerSelection].message}`;
    computerScore++;
  };

  message.textContent = resultMessage;
  msgContainer.appendChild(message);

  if (playerScore === winningScore) {
    message.textContent = "You won the Game!";
  } else if (computerScore === winningScore) {
    message.textContent = "Computer won the Game!";
  };

  totalUserScore.textContent = playerScore;
  totalCpuScore.textContent = computerScore;
  cpuScore.appendChild(totalCpuScore);
  userScore.appendChild(totalUserScore);

  msgContainer.appendChild(message);

};

const playGame = () => {
  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const playerSelection = choice.id;
      playRound(playerSelection);
    });
  });
};

restart.addEventListener("click", () => {
  restartGame();
});

const restartGame = () => {
  totalUserScore.textContent = 0;
  totalCpuScore.textContent = 0;
  message.textContent = '';
  playerScore = 0;
  computerScore = 0;
};

playGame();
