let playerScore = 0;
let cpuScore = 0;
let maxScore = 3;


const getComputerChoice = () => {
  const RPS = ['rock', 'paper', 'scissors'];
  const randomRPS = Math.floor(Math.random() * RPS.length);
  return RPS[randomRPS];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return 'Tie! Please go again'
  };
};

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
