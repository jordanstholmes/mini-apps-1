document.getElementById('game-board');
const resetButton = document.getElementById('reset');
const gameBoard = document.getElementById('game-board');

const GameState = {
  lastMove: -1,
  board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
  ],
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
  _checkVerticalWin: function() {

  },
  _checkHorizontalWin: function() {

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
        square.innerHTML = GameState.getNextMoveType();
        GameState.toggleMove(square.id.split(''));
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
  }
}

Controller.addListeners();



