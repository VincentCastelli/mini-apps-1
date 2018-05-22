
// generate a 3x3 game board 
let currentPlayer = 0;
let turn = 0;

let createBoard = () => {
  let gameBoard = document.getElementById('game-board');
  let counter = 0;

  for (let i = 0; i < 3; i++) {
    let row = document.createElement('tr');

    for (let j = 0; j < 3; j++) {
      let col = document.createElement('td');
      col.innerHTML = counter;

      row.appendChild(col);
    }
    gameBoard.appendChild(row);
  }
  // let gameBoard = [];
  // let gameBoardRow = [];
  // let size = n1 * n2;
  // let html = document.getElementById('game-board');
  
  // for (let i = 0; i <= size; i++) {
  //   let initValue = 0;
  //   if (gameBoardRow.length === 3) {
  //     gameBoard.push(gameBoardRow);
  //     gameBoardRow = [];
  //     gameBoardRow.push(initValue);
  //   } else {
  //     gameBoardRow.push(initValue);
  //   }
  // }

  // this.gameBoard.innerHTML = html;
  // this.cells = this.gameBoard.getElementsByTagName('td')

  // //loop through the cells and add event listener
  // for (let x = 0; x < this.cells.length; x++) {
  //   this.cells[x].addEventListener('click', markCell);
  // }

  // let markCellHandler = (event) => {
  //   this.markCell(event.target);
  // }

};

let winningCombos = new Array();

let insertCombos = () => {
    winningCombos.push([1, 2, 3]);
    winningCombos.push([4, 5, 6]);
    winningCombos.push([7, 8, 9]);
    winningCombos.push([1, 4, 7]);
    winningCombos.push([2, 5, 8]);
    winningCombos.push([3, 6, 9]);
    winningCombos.push([1, 5, 9]);
    winningCombos.push([3, 5, 7]);
};

let markCell = () => {

}

let checkWinner = () => {

}

let reset = () => {

};

window.onload = createBoard;