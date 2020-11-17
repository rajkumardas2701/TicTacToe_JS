/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

import { board, field } from './board.js';
import players from './players.js';
import * as elements from './DOMElements.js';

const controller = (() => {
  const player1 = players('Test 1', 'X');
  const player2 = players('Test 2', 'O');
  elements.playerOne.textContent = `${player1.name} as "${player1.mark}"`;
  elements.playerTwo.textContent = `${player2.name} as "${player2.mark}"`;

  let currentPlayer = player1;

  const changePlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const winner = (player) => {
    const move = player.mark;
    for (let i = 0; i < board().winLines.length; i += 1) {
      let end = 0;
      for (let j = 0; j < 3; j += 1) {
        if (field[board().winLines[i][j]] === move) {
          end += 1;
        }
        if (end === 3) {
          return true;
        }
      }
    }
    return false;
  };

  const draw = () => {
    return !field.includes('');
  };

  const resetGame = () => {
    for (let i = 0; i < field.length; i += 1) {
      field[i] = '';
    }
    board().displayBoard();
    currentPlayer = player1;
  };

  const setupEventListeners = () => {
    elements.grid.addEventListener('click', addMove);
  };

  const addMove = (event) => {
    const position = event.target.id.slice(5, 6);
    document.getElementById('alert-msg').innerHTML = '';
    if (position !== '' && board().setField(position, currentPlayer.mark)) {
      console.log(field);
      if (winner(currentPlayer)) {
        console.log(`${currentPlayer.name} is Winner`);
        resetGame();
      } else if (draw()) {
        console.log('Game Draw');
        resetGame();
      } else changePlayer();
    }
  };


  return {
    init() {
      setupEventListeners();
    },
  };
})();

controller.init();
// export default controller;