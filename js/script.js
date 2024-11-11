console.log("hello world");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choiceMax = 3;
  function computerChoice(choiceMax) {
    return Math.floor(Math.random() * choiceMax);
  }
  const computerAns = computerChoice(choiceMax);

  if (computerAns == 0) {
    console.log("rock");
    return "rock";
  } else if (computerAns == 1) {
    console.log("paper");
    return "paper";
  } else if (computerAns == 2) {
    console.log("scissors");
    return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = window.prompt("Rock, paper, or scissors?", "");
  const humanAns = humanChoice.toLowerCase();

  if (humanAns == "rock") {
    console.log("rock");
    return humanAns;
  } else if (humanAns == "paper") {
    console.log("paper");
    return humanAns;
  } else if (humanAns == "scissors") {
    console.log("scissors");
    return humanAns;
  } else {
    console.log("Invalid input, choose either rock, paper, or scissors");
  }
}

function playRound(humanAns, computerAns) {
  if (humanAns == computerAns) {
    console.log("Tie");
  } else if (
    (humanAns === "rock" && computerAns === "scissors") ||
    (humanAns === "paper" && computerAns === "rock") ||
    (humanAns === "scissors" && computerAns === "paper")
  ) {
    console.log("You win!");
    humanScore++;
  } else {
    console.log("You lose!");
    computerScore++;
  }
}

function playGame() {
  const humanSelect = getHumanChoice();
  const computerSelect = getComputerChoice();

  playRound(humanSelect, computerSelect);

  if (humanScore == 5) {
    console.log("U won bruv");
  } else if (computerScore == 5) {
    console.log("big L bruv");
  } else {
    playGame();
  }
}

playGame();
