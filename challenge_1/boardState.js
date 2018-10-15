class BoardState {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.lastMove = true;
    this.board = this.generateBoard();
    this.gameOver = false;
    this.gameWonMessage = null;
  }

  generateBoard() {
    return Array(this.boardSize).fill(undefined).map((row) => {
      return Array(this.boardSize).fill(0);
    });
  }

  toggleMove([row, col]) {
    this.board[row][col] = this.lastMove;
  }

  getNextMoveType() {
    this.lastMove = !this.lastMove;
    return this.lastMove;
  }

  checkForWin(move) {
    var checks = ['Vertical', 'Horizontal', 'MajorDiagonal', 'MinorDiagonal'];

    checks.forEach((check) => {
      var total = this[`_check${check}`](move);
      this._checkTotal(total);
    });

    if (this.gameWonMessage) {
      this.gameOver = true;
      return this.gameWonMessage;
    }
  }

  _checkVertical([row, col]) {
    return this.board.reduce((acc, row) => {
      return acc + row[col];
    }, 0);
  }

  _checkHorizontal([row, col]) {
    return GameState.board[row].reduce((acc, val) => {
      return acc + val;
    });
  }

  _checkMajorDiagonal([row, col]) {
    var row, col, total;
    row = col = total = 0;

    while (row < GameState.boardSize) {
      total += GameState.board[row][col];
      row = col += 1;
    }
    return total;
  }

  _checkMinorDiagonal([row, col]) {
    var row = GameState.boardSize - 1;
    var col = 0; 
    var total = 0;
    
    while (row >= 0) {
      total += GameState.board[row][col];
      row--; 
      col++;
    }

    return total;  
  }

  _checkTotal(total) {
    if (total === this.boardSize) {
      this.gameWonMessage = 'X WINS!';
    } else if (total === -(this.boardSize)) {
      this.gameWonMessage = 'O WINS!';
    } else {
      this.gameWonMessage = null;
    }
  }
}
