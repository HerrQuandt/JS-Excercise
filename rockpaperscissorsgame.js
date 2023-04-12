console.log('hi');

const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === "rock"||userInput === "paper"||userInput === "scissors"||userInput === "bomb")
{return userInput;}
else {console.log("Error")}
};

// console.log(getUserChoice("Brunnen"));

const getComputerChoice = randomNumber => {
  randomNumber= Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return "rock";
    break;
    case 1:
    return "paper";
    break;
    case 2:
    return "scissors";
    default: 
    console.log("Computer says NO!");
  }
}
// console.log(getComputerChoice());

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice === "bomb") {
    return "You found the secret cheat code and won!";
  }
  if (userChoice === computerChoice) {
    return "The game is a Tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The Computer won this round!";
    }else {
      return "You won this round!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The Computer won this round!";
    }else {
      return "You won this round!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The Computer won this round!";
    }else {
      return "You won this round!";
    }
  }
}
// console.log(determineWinner("rock","paper"));

const playGame = () => {
  const userChoice 
= getUserChoice("bomb");
  const computerChoice 
= getComputerChoice();
  console.log("you threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();
