boardState = new BoardState();

const Controller = {

  resetButton: undefined,

  boardElement: undefined,

  addListeners: () => {
    Controller.resetButton = document.getElementById('reset');
    Controller.boardElement = document.getElementById('game-board'); 

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
  },

  addResetListener: () => {

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
