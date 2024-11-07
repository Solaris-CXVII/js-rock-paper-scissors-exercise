console.log("hello world");

function getComputerChoice() {
  const choiceMax = 3;
  function computerChoice(choiceMax) {
    return Math.floor(Math.random() * choiceMax);
  }
  const computerAns = computerChoice(choiceMax);

  if (computerAns == 0) {
    console.log("Rock");
  } else if (computerAns == 1) {
    console.log("Paper");
  } else if (computerAns == 2) {
    console.log("Scissors");
  }
}

getComputerChoice();

function getHumanChoice() {
  const humanChoice = window.prompt("Rock, paper, or scissors?", "");

  if (humanChoice == "rock") {
    console.log("rock");
  }
}

getHumanChoice();
