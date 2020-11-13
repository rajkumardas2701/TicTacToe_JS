/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

import board from './board.js';
// import players from './players.js';
// import * as elements from './DOMElements.js';

// console.log(board().field);

const boardElements = board().field;
// console.log(boardElements);

const displayController = (function () {
  return {

    displayBoard() {
      for (let i = 0; i < boardElements.length; i += 1) {
        document.querySelector(`#cell-${i}`).textContent = boardElements[i];
      }
    },
  };
}());

const controller = (function (displayCntrl) {
  displayCntrl.displayBoard();
}(displayController));
