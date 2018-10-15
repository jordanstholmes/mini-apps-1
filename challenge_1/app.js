const resetButton = document.getElementById('reset');
const gameBoard = document.getElementById('game-board');

const GameState = {
  boardSize: 3,
  lastMove: -1,
  board: [],
  generateBoard: function() {
    GameState.board = Array(GameState.boardSize).fill(undefined).map((row) => {
      return Array(GameState.boardSize).fill(0);
    });
    console.log(GameState.board);
  },
  toggleMove: function([row, col]) {
    GameState.board[row][col] = GameState.lastMove;
  },
  reset: function() {
    for (var row = 0; row < GameState.board.length; row++) {
      for (var col = 0; col < GameState.board.length; col++) {
        GameState.board[row][col] = 0;
      }
    }
    GameState.lastMove = -1;
  },
  getNextMoveType: function() {
    GameState.lastMove = GameState.lastMove === 1 ? -1 : 1;
    return GameState.lastMove === 1 ? 'x' : 'o';
  },
  checkForWin: function(move) {
    var checks = ['_checkVerticalWin', '_checkHorizontalWin', '_checkMajorDiagonalWin', '_checkMinorDiagonalWin'];
    var result = null;
    checks.forEach((check) => {
      if (!result) {
        result = GameState[check](move);
      }
    });
    if (result) {
      console.log(result);
    }
  },
  _checkVerticalWin: function([row, col]) {
    const colTotal = GameState.board.reduce((acc, row) => {
      return acc + row[col];
    }, 0);
    return GameState._checkTotal(colTotal);
  },
  _checkHorizontalWin: function([row, col]) {
    const rowTotal = GameState.board[row].reduce((acc, val) => {
      return acc + val;
    });
    return GameState._checkTotal(rowTotal);
  },
  _checkTotal: function(total) {
    if (total === GameState.boardSize) {
      return 'X WINS!';
    } else if (total === -(GameState.boardSize)) {
      return 'O WINS!';
    } else {
      return null;
    }
  },
  _checkMajorDiagonalWin: function() {
    var row, col, total;
    row = col = total = 0;
    while (row < GameState.boardSize) {
      total += GameState.board[row][col];
      row = col += 1;
    }
    return GameState._checkTotal(total);
  },
  _checkMinorDiagonalWin: function() {
    var row = GameState.boardSize - 1;
    var col = 0; 
    var total = 0;
    
    while (row >= 0) {
      total += GameState.board[row][col];
      row--; 
      col++;
    }
    return GameState._checkTotal(total);
  }
};

const Controller = {
  addListeners: () => {
    resetButton.addEventListener('click', () => {
      View.clearBoardDisplay();
      GameState.reset();
    });
    
    gameBoard.addEventListener('click', (e) => {
      const square = e.target;
      if (square.innerHTML === '&nbsp;') {

        var move = square.id.split('');

        View.addMove(square, GameState.getNextMoveType());
        GameState.toggleMove(move);
        GameState.checkForWin(move);
      }
    });
  }
};

const View = {
  clearBoardDisplay: function() {
    const table = document.getElementById('game-board');
    allSquares = table.getElementsByTagName('button');

    for (var i = 0; i < allSquares.length; i++) {
      allSquares[i].innerHTML = '&nbsp;';
    }
  },
  addMove: function(square, type) {
    square.innerHTML = type;
  }
};

GameState.generateBoard();
Controller.addListeners();



