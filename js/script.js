console.log("hello world");

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
  const choiceMax = 3;
  function computerChoice(choiceMax) {
    return Math.floor(Math.random() * choiceMax);
  }
  const computerAns = computerChoice(choiceMax);

  if (computerAns == 0) {
    console.log("rock");
  } else if (computerAns == 1) {
    console.log("paper");
  } else if (computerAns == 2) {
    console.log("scissors");
  }
}

function getHumanChoice() {
  const humanChoice = window.prompt("Rock, paper, or scissors?", "");
  const humanAns = humanChoice.toLowerCase();

  if (humanAns == "rock") {
    console.log("rock");
  } else if (humanAns == "paper") {
    console.log("paper");
  } else if (humanAns == "scissors") {
    console.log("scissors");
  } else {
    console.log("Invalid input, choose either rock, paper, or scissors");
  }
}

function playRound(humanAns, computerAns) {
  if {}
}

const humanSelect = getHumanChoice();
const computerSelect = getComputerChoice();

playRound(humanSelect, computerSelect);
