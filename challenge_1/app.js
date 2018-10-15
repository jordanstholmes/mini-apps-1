// import BoardState from 'boardState.js';

const resetButton = document.getElementById('reset');
const gameBoard = document.getElementById('game-board');

boardState = new BoardState();

const Controller = {
  addListeners: () => {
    resetButton.addEventListener('click', () => {
      View.resetDisplay();
      boardState = new window.BoardState();
    });
    
    gameBoard.addEventListener('click', (e) => {
      const square = e.target;
      if (square.innerHTML === '&nbsp;' && !boardState.gameOver) {

        var move = square.id.split('');

        View.addMove(square, boardState.getNextMoveType());
        boardState.toggleMove(move);
        var gameWon = boardState.checkForWin(move);
        if (gameWon) {
          View.displayWinner(gameWon);
        }
      }
    });
  }
};

const View = {
  resetDisplay: function() {
    const table = document.getElementById('game-board');
    allSquares = table.getElementsByTagName('button');

    for (var i = 0; i < allSquares.length; i++) {
      allSquares[i].innerHTML = '&nbsp;';
    }
    document.getElementsByTagName('h1')[0].innerHTML = 'Tic Tac Toe';
  },
  addMove: function(square, type) {
    square.innerHTML = type;
  },
  displayWinner: function(winResults) {
    document.getElementsByTagName('h1')[0].innerHTML = winResults;
  }
};

document.addEventListener('DOMContentLoaded', (e) => {
  Controller.addListeners();
});


// const GameState = {
//   boardSize: 3,
//   lastMove: -1,
//   board: [],
//   gameOver: false,
//   generateBoard: function() {
//     GameState.board = Array(GameState.boardSize).fill(undefined).map((row) => {
//       return Array(GameState.boardSize).fill(0);
//     });
//     console.log(GameState.board);
//   },
//   toggleMove: function([row, col]) {
//     GameState.board[row][col] = GameState.lastMove;
//   },
//   reset: function() {
//     for (var row = 0; row < GameState.board.length; row++) {
//       for (var col = 0; col < GameState.board.length; col++) {
//         GameState.board[row][col] = 0;
//       }
//     }
//     GameState.lastMove = -1;
//     GameState.gameOver = false;
//   },
//   getNextMoveType: function() {
//     GameState.lastMove = GameState.lastMove === 1 ? -1 : 1;
//     return GameState.lastMove === 1 ? 'x' : 'o';
//   },
//   checkForWin: function(move) {
//     var checks = ['_checkVerticalWin', '_checkHorizontalWin', '_checkMajorDiagonalWin', '_checkMinorDiagonalWin'];
//     var result = null;
//     checks.forEach((check) => {
//       if (!result) {
//         result = GameState[check](move);
//       }
//     });
//     if (result) {
//       GameState.gameOver = true;
//       return result;
//     }
//   },
//   _checkVerticalWin: function([row, col]) {
//     const colTotal = GameState.board.reduce((acc, row) => {
//       return acc + row[col];
//     }, 0);
//     return GameState._checkTotal(colTotal);
//   },
//   _checkHorizontalWin: function([row, col]) {
//     const rowTotal = GameState.board[row].reduce((acc, val) => {
//       return acc + val;
//     });
//     return GameState._checkTotal(rowTotal);
//   },
//   _checkTotal: function(total) {
//     if (total === GameState.boardSize) {
//       return 'X WINS!';
//     } else if (total === -(GameState.boardSize)) {
//       return 'O WINS!';
//     } else {
//       return null;
//     }
//   },
//   _checkMajorDiagonalWin: function() {
//     var row, col, total;
//     row = col = total = 0;
//     while (row < GameState.boardSize) {
//       total += GameState.board[row][col];
//       row = col += 1;
//     }
//     return GameState._checkTotal(total);
//   },
//   _checkMinorDiagonalWin: function() {
//     var row = GameState.boardSize - 1;
//     var col = 0; 
//     var total = 0;
    
//     while (row >= 0) {
//       total += GameState.board[row][col];
//       row--; 
//       col++;
//     }
//     return GameState._checkTotal(total);
//   }
// };


