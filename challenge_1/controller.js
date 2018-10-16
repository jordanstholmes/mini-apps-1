class Controller {

  /*
  Factor out checking the view for data about the state of the game
  */


  constructor(model, view) {
    this.resetBtnElement = document.getElementById('reset');
    this.boardElement = document.getElementById('game-board');
    this.Model = model;
    this.View = view;
  }

  _addResetListener() {
    this.resetBtnElement.addEventListener('click', () => {
      this.View.resetDisplay();
      this.Model = new BoardState();
    });
  }

  _addMoveListener() {
    this.boardElement.addEventListener('click', (e) => {
      const square = e.target;
      if (square.innerHTML === '&nbsp;' && !this.Model.gameOver) {

        var move = square.id.split('');

        View.addMove(square, Model.getNextMoveType());
        Model.toggleMove(move);
        var gameWon = Model.checkForWin(move);
        if (gameWon) {
          View.displayWinner(gameWon);
        }
      }
    });
  }

}


const Controller = {

  resetButton: undefined,

  boardElement: undefined,

  addListeners: () => { 

    
    
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