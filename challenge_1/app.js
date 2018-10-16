var controller; 

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
  controller = new Controller(new BoardState(), View);
});
