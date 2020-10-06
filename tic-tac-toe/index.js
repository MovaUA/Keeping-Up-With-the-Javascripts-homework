let game;

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const board = document.querySelector('.board');
  const cells = board.childNodes;

  game = new Game(cells);

  for (let cell of cells) {
    cell.addEventListener('click', clickCell);
  }
}

function clickCell(e) {
  game.clickCell(e.target);
}

function Game(cells) {
  this.cells = cells;

  this.player = 'X';

  this.board =
    [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];

  this.clickCell = (cellElement) => {
    const id = cellElement.id;

    const rowIndex = parseInt(id[0]);
    const colIndex = parseInt(id[1]);

    const cell = this.board[rowIndex][colIndex];

    if (cell) return;

    this.board[rowIndex][colIndex] = this.player;
    cellElement.innerText = this.player;

    if (this.hasWon()) {
      setTimeout((winner) => {

        alert(`Player ${winner} has won!`);
        this.cleanup();

      }, 0, this.player);

      return;
    }

    if (this.isDraw()) {
      setTimeout(() => {

        alert("Cats game!");
        this.cleanup();

      }, 0);

      return;
    }

    this.switchPlayer();
  };

  this.hasWon = () => {
    const lines = [
      // rows:
      this.board[0],
      this.board[1],
      this.board[2],
      // columns:
      [this.board[0][0], this.board[1][0], this.board[2][0],],
      [this.board[0][1], this.board[1][1], this.board[2][1],],
      [this.board[0][2], this.board[1][2], this.board[2][2],],
      // diagonals:
      [this.board[0][0], this.board[1][1], this.board[2][2],],
      [this.board[0][2], this.board[1][1], this.board[2][0],],
    ];

    linesLoop:
    for (let line of lines) {
      for (let lineCell of line) {
        if (lineCell !== this.player) {
          continue linesLoop;
        }
      }
      return true;
    }
    return false;
  };

  this.isDraw = () => {
    let filledCellsCount = 0;

    for (let line of this.board) {
      for (let cell of line) {
        if (cell) {
          filledCellsCount++;
        }
      }
    }

    return filledCellsCount === 9;
  };

  this.switchPlayer = () => {
    if (this.player === 'X') {
      this.player = '0';
    } else {
      this.player = 'X';
    }
  };

  this.cleanup = () => {
    this.player = 'X';

    this.board =
      [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];

    for (let cell of this.cells) {
      cell.innerText = '';
    }
  };
}
