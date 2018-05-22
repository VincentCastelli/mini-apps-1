// init game board 
let initGame = () => {
  for (let i = 1; i <= 9; i++) {
    restart(i);
  }
  document.turn = 'X';
  document.winner = null;
  displayMessage(document.turn + ' goes first');
};

let displayMessage = (msg) => {
  document.getElementById('message').innerText = msg;
};

let nextTurn = (cell) => {
  if (document.winner !== null) {
    displayMessage(document.turn + ' has already won!')
  } else if (cell.innerText === '') {
    cell.innerText = document.turn;
    switchTurn();
  } else {
    alert('Pick another square!');
  }
};

let switchTurn = () => {
  if (checkWinner(document.turn)) {
    displayMessage(document.turn + ' wins!');
    document.winner = document.turn;
  } else if (document.turn === 'X') {
    document.turn = 'O';
    displayMessage(document.turn + ' \'s turn');
  } else {
    document.turn = 'X'
    displayMessage(document.turn + ' \'s turn');
  }
  
};

// let itIsDraw = (move) => {
//   let finalDrawResult = false;

//   for (let j = 1; j <= 9; j++) {
//     if (document.getElementById('tr').innerHTML !== null && document.winner === null) {
//       finalDrawResult = true;
//     }
//   }

//   return finalDrawResult;
// };

let checkWinner = (move) => {
  let finalWinResult = false;
  
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
        finalWinResult = true;
  }

  return finalWinResult;
};

let checkRow = (a, b, c, move) => {
  let result = false;

  if (getCell(a) === move && getCell(b) === move && getCell(c) === move) {
    result = true;
  }

  return result;
};

let getCell = (number) => {
  return document.getElementById('s' + number).innerText;
};

let restart = (number) => {
  document.getElementById('s' + number).innerText = '';
}
  //gameBoard set to the table tag on HTML
  // let gameBoard = document.getElementById('game-board');
  // let counter = 1;

  // // nested for loop to generate 3x3 col and rows 
  // for (let i = 0; i < 3; i++) {
  //   let row = document.createElement('tr');

  //   for (let j = 0; j < 3; j++) {
  //     let col = document.createElement('td');
  //     col.innerHTML = counter;

  //     let clickHandler = (event) => {
  //       if (currentPlayer === 0) {
  //           this.innerHTML = 'X';
  //           playerOneSelections.push(parseInt(this.id));
  //           playerOneSelections.sort(function(a, b) { return a - b });
  //       } else {
  //           this.innerHTML = 'O';
  //           playerTwoSelections.push(parseInt(this.id));
  //           playerTwoSelections.sort(function(a, b) { return a - b });
  //       }

  //       turn++;
  //       // check if winner 
  //       let winner = checkWinner();
  //         if (winner) {
  //           alert(currentPlayer, ' has won the game!');
  //         } else {
  //           if (currentPlayer === 0) {
  //             currentPlayer = 1;
  //           } else {
  //             currentPlayer = 0;
  //           }
  //         }
  //     };
  //     col.addEventListener('click', clickHandler);

  //     row.appendChild(col);
  //     counter++;
  //   }
  //   gameBoard.appendChild(row);
  // }

  // insertCombos();
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
