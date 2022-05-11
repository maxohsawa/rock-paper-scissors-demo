console.log("hello from script.js");

// state:
// play again?
let playAgain = true;
// player wins, losses, ties
let wins = 0;
let losses = 0;
let ties = 0;

// choices
const choices = ["R", "P", "S"];

// func: validate the user input
function validateInput(userInput) {
  // take the user input and change it to all uppercase
  userInput = userInput.toUpperCase();
  // compare input with valid options
  if (userInput === "R" || userInput === "P" || userInput === "S") {
    return true;
  } else {
    return false;
  }

  // return (userInput === "R" || userInput === "P" || userInput === "S")
}

// func: generate the computer choice
function generateComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// func: compare the user choice and computer choice to determine winner
function determineWinner(user, computer) {
  // win conditions (R, S), (S, P), (P, R)
  if (
    (user === "R" && computer === "S") ||
    (user === "S" && computer === "P") ||
    (user === "P" && computer === "R")
  ) {
    return "user";
    // tie condition (user === computer)
  } else if (user === computer) {
    return "tie";
  } else {
    return "computer";
  }
  // else loss
}

// play loop
while (playAgain) {
  // state:
  // user choice
  let userChoice;
  // computer choice
  let computerChoice;
  // winner // "player" or "computer" or "tie"
  let winner;

  let validInput = false;
  // prompt loop
  while (!validInput) {
    // prompting the user for choice of R P or S
    userChoice = prompt("What is your choice? Rock, Paper, or Scissors?");
    // func: validate the user input
    validInput = validateInput(userChoice);
  }

  // alert "user chose ____"
  alert(`User chose ${userChoice}`);

  // func: generate the computer choice
  computerChoice = generateComputerChoice();
  // alert "computer chose ____"
  alert(`The computer chose ${computerChoice} .... drum roll...`);
  // func: compare the user choice and computer choice to determine winner
  winner = determineWinner(userChoice, computerChoice);

  // alert declare winner
  alert(`Result: ${winner}`);

  // log result
  if (winner === "user") {
    wins++;
  } else if (winner === "computer") {
    losses++;
  } else {
    ties++;
  }
  // prompt the user to see if they want to play again
  // also include stats

  playAgain = confirm(`
    Stats:
    Wins: ${wins}
    Losses: ${losses}
    Ties: ${ties}

    Would you like to play again?
  `);
}
