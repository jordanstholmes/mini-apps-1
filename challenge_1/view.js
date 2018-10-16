class View {
  constructor() {
    this.messageElement = document.getElementById('message-display');
    this.boardSquares = document.getElementById('game-board').getElementsByTagName('button');
  }

  resetDisplay() {
    this._resetBoard();
    this._resetMessage();
  }

  addMove(square, type) {
    square.innerHTML = type;
  }

  displayWinner(winResults) {
    this.messageElement.innerHTML = winResults;
  }

  _resetBoard() {
    for (var i = 0; i < this.boardSquares.length; i++) {
      this.boardSquares[i].innerHTML = '&nbsp;';
    }
  }

  _resetMessage() {
    this.messageElement.innerHTML = 'Tic Tac Toe';
  }
}
