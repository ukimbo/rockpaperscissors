function getComputerChoice() {
    let choiceNumber = Math.random();
    if (choiceNumber < 0.34) {
        return "Rock";
    } else if (choiceNumber >= 0.34 && choiceNumber < 0.67) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Type Rock, Paper, or Scissors to make your selection");
    let standardInput = input.toLocaleLowerCase().trim();
    if (standardInput == "rock") {
        return "Rock";
    } else if (standardInput == "paper") {
        return "Paper";
    } else if (standardInput == "scissors") {
        return "Scissors";
    } else {
        return "Invalid Input";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a tie! No winner this round.");
    } else if (humanChoice == "Rock" && computerChoice == "Paper") {
        console.log("You lose! Paper beats rock.");
        computerScore += 1;
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        console.log("You lose! Scissors beats paper.");
        computerScore += 1;
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        console.log("You lose! Rock beats scissors.");
        computerScore += 1;
    } else if (computerChoice == "Rock" && humanChoice == "Paper") {
        console.log("W! Paper beats rock.");
        humanScore += 1;
    } else if (computerChoice == "Paper" && humanChoice == "Scissors") {
        console.log("W! Scissors beats paper.");
        humanScore += 1;
    } else if (computerChoice == "Scissors" && humanChoice == "Rock") {
        console.log("W! Rock beats scissors.");
        humanScore += 1;
    }
}

function playGame() {
    let roundsPlayed = 0;
    while (roundsPlayed < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        roundsPlayed++;
    }
    if (humanScore > computerScore) {
        console.log("You win the game! Congrats.");
    } else if (humanScore < computerScore) {
        console.log("You lost the game! Das tuff.");
    } else {
        console.log("You tied. That's fine I guess.");
    }
}

playGame();
