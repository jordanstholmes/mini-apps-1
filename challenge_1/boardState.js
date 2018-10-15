class BoardState {
  constructor(boardSize = 3) {
    this.boardSize = boardSize;
    this.lastMove = false;
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
    this.board[row][col] = this.lastMove ? 1 : -1;
  }

  getNextMoveType() {
    this.lastMove = !this.lastMove;
    return this.lastMove ? 'x' : 'o';
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
    return this.board[row].reduce((acc, val) => {
      return acc + val;
    });
  }

  _checkMajorDiagonal([row, col]) {
    var row, col, total;
    row = col = total = 0;

    while (row < this.boardSize) {
      total += this.board[row][col];
      row = col += 1;
    }
    return total;
  }

  _checkMinorDiagonal([row, col]) {
    var row = this.boardSize - 1;
    var col = 0; 
    var total = 0;
    
    while (row >= 0) {
      total += this.board[row][col];
      row--; 
      col++;
    }

    return total;  
  }

  _checkTotal(total) {
    if (!this.gameWonMessage) {
      if (total === this.boardSize) {
        this.gameWonMessage = 'X WINS!';
      } else if (total === -(this.boardSize)) {
        this.gameWonMessage = 'O WINS!';
      } else {
        this.gameWonMessage = null;
      }
    }
  }
}

// export default BoardState;