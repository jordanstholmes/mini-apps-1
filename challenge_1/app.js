document.getElementById('game-board');
const resetButton = document.getElementById('reset');
const gameBoard = document.getElementById('game-board');

const GameState = {
  lastMove: 'X',
  getNextMoveType: function() {
    GameState.lastMove = GameState.lastMove === 'x' ? 'o' : 'x';
    return GameState.lastMove;
  }
}

const Controller = {
  addListeners: () => {
    resetButton.addEventListener('click', (e) => {
      const table = document.getElementById('game-board');
      allSquares = table.getElementsByTagName('button');

      for (var i = 0; i < allSquares.length; i++) {
        allSquares[i].innerHTML = '&nbsp;';
      }

      console.log(allSquares);
    });
    
    gameBoard.addEventListener('click', (e) => {
      const square = e.target;
      if (square.innerHTML === '&nbsp;') {
        square.innerHTML = GameState.getNextMoveType();
      }
    });
  }

}

Controller.addListeners();



