function getComputerChoice() {
    let choiceNumber = Math.random();
    if (choiceNumber < 0.34) {
        return "Rock";
    } else if (choiceNumber >= 0.34 && choiceNumber < 0.67) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function getHumanChoice() {
    let input = prompt("Type Rock, Paper, or Scissors to make your selection");
    let standardInput = input.toLocaleLowerCase;
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
