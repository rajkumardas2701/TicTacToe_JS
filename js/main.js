/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

import board from './board.js';
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

  const setupEventListeners = () => {
    elements.grid.addEventListener('click', addMove);
  };

  // console.log(field);
  const addMove = (event) => {
    const position = event.target.id.slice(5, 6);
    document.getElementById('alert-msg').innerHTML = '';
    if (position !== '' && board().setField(position, currentPlayer.mark)) { changePlayer(); }
    // console.log(field);
  };


  return {
    init() {
      setupEventListeners();
    },
  };
})();

controller.init();
// export default controller;