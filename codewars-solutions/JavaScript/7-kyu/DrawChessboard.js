/*
  A grid is a perfect starting point for many games (Chess, battleships, Candy Crush!).
  Making a digital chessboard I think is an interesting way of visualising how loops can
  work together.

  Your task is to write a function that takes two integers rows and columns and returns a 
  chessboard pattern as a two dimensional array.
  
  So, for rows = 6 and columns = 4, should return an array like this:
  [
      ["O","X","O","X"],
      ["X","O","X","O"],
      ["O","X","O","X"],
      ["X","O","X","O"],
      ["O","X","O","X"],
      ["X","O","X","O"]
  ]
*/
function chessBoard(rows, columns) {
  const board = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row[j] = (i + j) % 2 === 0 ? "O" : "X";
    }
    board[i] = row;
  }

  return board;
}

// Test cases
console.log(chessBoard(6, 4));
