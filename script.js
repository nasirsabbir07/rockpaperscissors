
let playerSelection = prompt("Player chose: ");
console.log(playerSelection);

function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    let arrIndex = Math.floor(Math.random() * arr.length) //generating random rock, paper scissors index
    return console.log(arr[arrIndex]);
}

computerPlay();