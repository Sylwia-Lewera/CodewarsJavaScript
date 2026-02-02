/*
Rules of the "Rock, Paper, Scissors" game are:

Rock beats Scissors,
Scissors beat Paper,
Paper beats Rock,
Two identical moves are a draw.
Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

Examples:
"scissors",     "paper"     --> "Player 1 won!"
"scissors",     "rock"      --> "Player 2 won!"
"paper",        "paper"     --> "Draw!"
*/

const rps = (p1, p2) => {
  if( typeof p1 !== 'string' || typeof p2 !== 'string') {
    console.error("icorrect moves!");
    return;
    }
  if (p1 === p2 ) return "Draw!" ;
  //lookup object of p1 wins
  const wins = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  };

  return wins[p1] === p2 ? "Player 1 won!" : "Player 2 won!";
};