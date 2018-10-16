class Controller {

  /*
  Factor out checking the view for data about the state of the game
  */


  constructor(model, view) {
    this.resetBtnElement = document.getElementById('reset');
    this.boardElement = document.getElementById('game-board');
    this.Model = model;
    this.View = view;
    this._addResetListener();
    this._addMoveListener();
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

        View.addMove(square, this.Model.getNextMoveType());
        this.Model.toggleMove(move);
        var gameWon = this.Model.checkForWin(move);
        if (gameWon) {
          this.View.displayWinner(gameWon);
        }
      }
    });
  }
}
