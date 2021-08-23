const playerBtns = document.querySelectorAll(".player-btn");
const playerPoint = document.querySelector(".playerScore");
const computerPoint = document.querySelector(".computerScore");
const resultDisplay = document.querySelector(".result-comments");
const audio = document.getElementById("audio");

let computerSelection;
let playerScore = 0;
let computerScore = 0;
let playerSum = 0;
let computerSum = 0;
let resultContent;

//*Game Logic //
function game(playerSelection) {
  computerSelection = computerPlay();
  // console.log(computerSelection);
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerSum = playerScore;
    playerPoint.textContent = playerSum;
    resultContent = document.createElement("p");
    resultContent.classList.add("comments");
    resultContent.textContent = `You win,${playerSelection} beats ${computerSelection}.`;
    resultDisplay.insertBefore(resultContent, resultDisplay.firstChild);
  } else if (playerSelection === computerSelection) {
    resultContent = document.createElement("p");
    resultContent.classList.add("comments");
    resultContent.textContent = `It's a tie.`;
    resultDisplay.insertBefore(resultContent, resultDisplay.firstChild);
  } else {
    computerScore++;
    computerSum = computerScore;
    computerPoint.textContent = computerSum;
    resultContent = document.createElement("p");
    resultContent.classList.add("comments");
    resultContent.textContent = `You loose,${computerSelection} beats ${playerSelection}.`;
    resultDisplay.insertBefore(resultContent, resultDisplay.firstChild);
    // console.log("computer score: " + computerSum);
  }

  if (playerSum === 5) {
    let winnerName = "You";
    let winner = "athlete.svg";
    winnerFunction(winnerName, winner);
  } else if (computerSum === 5) {
    let winnerName = "Machine";
    let winner = "computer.svg";
    winnerFunction(winnerName, winner);
  }
}

//*Listening for player choice//
playerBtns.forEach(function (playerBtn) {
  playerBtn.addEventListener("click", function (e) {
    const img = e.currentTarget.getElementsByTagName("img");
    playerSelection = img[0].getAttribute("src");
    playerSelection = playerSelection.split(".");
    // console.log(playerSelection);
    // console.log(playerSelection[0]);
    if (playerSum === 5 || computerSum === 5) {
      return;
    }
    game(playerSelection[0]);
  });
});

function computerPlay() {
  let arr = ["rock", "paper", "scissors"];
  let arrIndex = Math.floor(Math.random() * arr.length); //generating random index of the array
  return arr[arrIndex];
}

//*winner modal function
function winnerFunction(name, value) {
  const resultModal = document.querySelector(".victory-modal");
  resultModal.classList.add("open-modal");
  resultModal.innerHTML = `<div class="modal-container">
      <h3 class="victory-header">${name} win</h3>
      <img src="${value}" alt="" class="player components" />
      <button class="play-btn">Play Again</button>
      </div>`;
  const playAgain = document.querySelector(".play-btn");
  playAgain.addEventListener("click", function () {
    resultModal.classList.remove("open-modal");
    window.location.reload();
  });
}
