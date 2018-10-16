class Controller {
  
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
      if (e.target.tagName !== 'BUTTON') { return; }
      const square = e.target;
      const move = square.id.split('');

      this._handleMove(move, square);
      this._handleWin(move);
    });
  }

  _handleMove(move, square) {
    if (this.Model.isValidMove(move)) {
      this.View.addMove(square, this.Model.getNextMoveType());
      this.Model.toggleMove(move);
    }
  }

  _handleWin(move) {
    const gameWon = this.Model.checkForWin(move);
    if (gameWon) {
      this.View.displayWinner(gameWon);
    }
  }
}
