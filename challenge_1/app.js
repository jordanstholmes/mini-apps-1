document.getElementById('game-board');
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
  },
  getNextMoveType: function() {
    GameState.lastMove = GameState.lastMove === 1 ? -1 : 1;
    return GameState.lastMove === 1 ? 'x' : 'o';
  },
  checkForWin: function(move) {
    console.log(GameState._checkHorizontalWin(move));
  },
  _checkVerticalWin: function([row, col]) {
    
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

  },
  _checkMinorDiagonalWin: function() {

  }

}

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
      console.log(GameState.board);
    });
  }

}

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
}

GameState.generateBoard();
Controller.addListeners();



