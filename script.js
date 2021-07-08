let computerSelection;
let playerSelection;
let playerPointCount = 0;
let playerPointSum = 0;
let computerPointCount = 0;
let computerPointSum = 0;

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  let arrIndex = Math.floor(Math.random() * arr.length); //generating random index of the array
  return arr[arrIndex];
}

function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection;
  let computerChoice = computerSelection;
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win!");
    playerPointCount++;
    playerPointSum += playerPointCount;
    console.log("Your points: " + playerPointSum);
  } else if (playerChoice === computerChoice) {
    console.log("It's a draw");
  } else {
    console.log("You loose");
    computerPointCount++;
    computerPointSum += computerPointCount;
    console.log("Computer's Points: " + computerPointSum);
  }
}

function game() {
  playerSelection = prompt("Player chose: ");
  console.log(playerSelection);
  playerSelection = playerSelection.toLowerCase(playerSelection);
  computerSelection = computerPlay();
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
}

for (let i = 1; i <= 5; i++) {
  console.log(`Round ${i}`); //{``} Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
  game();
}

if (playerPointSum > computerPointSum) {
  console.log("Congrats!!You win!!");
} else if (playerPointSum == computerPointSum) {
  console.log("It's a draw. Play again?");
} else {
  console.log("You Loose!!");
}
