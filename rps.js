let playerScore = 0;
let cpuScore = 0;
let maxScore = 3;


const getComputerChoice = () => {
  const RPS = ['rock', 'paper', 'scissors'];
  const randomRPS = Math.floor(Math.random() * RPS.length);
  return RPS[randomRPS];
};

const playRound = (playerSelection, computerSelection) => {
  const lowerCasePS = playerSelection.toLowerCase();

  const outcomes = {
    rock: { beats: 'scissors', message: 'Rock beats Scissors' },
    paper: { beats: 'rock', message: 'Paper beats Rock' },
    scissors: { beats: 'paper', message: 'Scissors beats Paper' }
  };

  if (lowerCasePS === computerSelection) {
    return 'Tie! Please go again';
  } else if (outcomes[lowerCasePS].beats === computerSelection){
    return `You win! ${outcomes[lowerCasePS].message}`;
  } else {
    return `You Lose! ${outcomes[computerSelection].message}`;
  }   
};

const playerSelection = 'scissors';
const computerSelection = getComputerChoice();
console.log('CPU:', computerSelection);
console.log(playRound(playerSelection, computerSelection));
