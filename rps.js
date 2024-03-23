const userScore = document.querySelector("#player");
const cpuScore = document.querySelector("#cpu");
const totalUserScore = document.querySelector("#user-score")
const totalCpuScore = document.querySelector("#cpu-score")

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

  const outcomes = {
    rock: { beats: 'scissors', message: 'Rock beats Scissors' },
    paper: { beats: 'rock', message: 'Paper beats Rock' },
    scissors: { beats: 'paper', message: 'Scissors beats Paper' }
  };

  if (lowerCasePS === computerSelection) {
    console.log('Tie! Please go again');
  } else if (outcomes[lowerCasePS].beats === computerSelection){
    console.log(`You win! ${outcomes[lowerCasePS].message}`);
    playerScore++;
  } else {
    console.log(`You Lose! ${outcomes[computerSelection].message}`);
    computerScore++;
  };
  
  if (playerScore === winningScore) {
    console.log("You won the Game!");
  } else if (computerScore === winningScore) {
    console.log("Computer won the Game!");
  };
  
  totalUserScore.textContent = playerScore;
  totalCpuScore.textContent = computerScore;
  cpuScore.appendChild(totalCpuScore);
  userScore.appendChild(totalUserScore);
};

const choices = document.querySelectorAll(".choose");

const playGame = () => {
  choices.forEach(choice => {
    choice.addEventListener("click", () => {
      const playerSelection = choice.id;
      playRound(playerSelection);
    });
  });
};

playGame();
