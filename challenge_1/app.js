// generate a 3x3 game board 
let createBoard = (n1, n2) => {
  let gameBoard = [];
  let gameBoardRow = [];
  let size = n1 * n2;
  
  for (let i = 0; i <= size; i++) {
    let initValue = 0;
    if (gameBoardRow.length === 3) {
      gameBoard.push(gameBoardRow);
      gameBoardRow = [];
      gameBoardRow.push(initValue);
    } else {
      gameBoardRow.push(initValue);
    }
  }
  
  return gameBoard;
};

console.log(createBoard(3, 3));

// render board function
// let renderBoard = (gameBoard) => {

// }

//create an event listener for a click event on a cell
let handleClick = () => {
  let element = document.getElementsByClassName('cell');

  element.onClick = () => console.log('I was clicked!');
}
