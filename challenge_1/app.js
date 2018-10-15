document.getElementById('game-board');
const resetButton = document.getElementById('reset');
const gameBoard = document.getElementById('game-board');

const GameState = {
  lastMove: 'X',
  getNextMoveType: function() {
    GameState.lastMove = GameState.lastMove === 'X' ? 'O' : 'X';
    return GameState.lastMove;
  }
}

const Controller = {
  addListeners: () => {
    resetButton.addEventListener('click', (e) => {

      console.log(GameState.getNextMoveType());
    });
    
    gameBoard.addEventListener('click', (e) => {
      console.log(e.target);
    });
  }

}

Controller.addListeners();



