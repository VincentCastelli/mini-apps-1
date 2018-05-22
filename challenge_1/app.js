// init game board 
let initGame = () => {
  document.turn = 'X';
  displayMessage(document.turn + ' goes first');
};

let displayMessage = (msg) => {
  document.getElementById('message').innerText = msg;
};

let nextTurn = (cell) => {
  if (cell.innerText === '') {
    cell.innerText = document.turn;
    switchTurn();
  } else {
    alert('Pick another square!');
  }
};

let switchTurn = () => {
  if (document.turn === 'X') {
    document.turn = 'O';
  } else {
    document.turn = 'X'
  }
  displayMessage(document.turn + ' \'s turn');
};

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