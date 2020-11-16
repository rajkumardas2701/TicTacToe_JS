/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

import board from './board.js';
// import players from './players.js';
// import * as elements from './DOMElements.js';
const controller = (() => {
  const setupEventListeners = () => {
    const DOM = board().DOMStrings;
    DOM.grid.addEventListener('click', addMove);
    // board().displayBoard();
  };

  const addMove = (event) => {
    event.preventDefault();
    const mark = event.target.id.slice(5, 6);
    board().setField(mark, 'X');
    // board().displayBoard();
    console.log('Testing');
  };

  return {
    init() {
      setupEventListeners();
    },
  };
})();

controller.init();
export default controller;
// console.log(board().DOMStrings.grid);