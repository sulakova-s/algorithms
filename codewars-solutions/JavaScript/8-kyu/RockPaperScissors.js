/* 
  Rules of the "Rock, Paper, Scissors" game are:
  Rock beats Scissors
  Scissors beat Paper,
  Paper beats Rock.
*/

// 1st solution
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    return "Player 1 won!";
  }

  return "Player 2 won!";
};

// 2nd solution
const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  const rules = {
    rock: "scissors", // rock beats scissors
    scissors: "paper", // scissors beat paper
    paper: "rock", // paper beats rock
  };

  return rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};

// Test cases
console.log(rps('rock', 'scissors'));     // "Player 1 won!"
console.log(rps('scissors', 'rock'));     // "Player 2 won!" 
console.log(rps('rock', 'rock'));         // "Draw!"
console.log();
console.log(rps2('rock', 'scissors'));     // "Player 1 won!"
console.log(rps2('scissors', 'rock'));     // "Player 2 won!" 
console.log(rps2('rock', 'rock'));         // "Draw!"
