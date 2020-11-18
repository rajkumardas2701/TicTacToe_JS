/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

import { board, field } from './board.js';
import players from './players.js';
import * as elements from './DOMElements.js';

const controller = (() => {
  let player1;
  let player2;
  let currentPlayer;

  const setupPlayers = (players, elements) => {
    player1 = players(elements.playerOneInput.value, 'X');
    player2 = players(elements.playerTwoInput.value, 'O');
    elements.playerOne.textContent = `${player1.name} as "${player1.mark}"`;
    elements.playerTwo.textContent = `${player2.name} as "${player2.mark}"`;
    currentPlayer = player1;
  };

  const setupEventListeners = () => {
    elements.grid.addEventListener('click', addMove);
  };

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

  const draw = () => !field.includes('');

  const resetGame = () => {
    for (let i = 0; i < field.length; i += 1) {
      field[i] = '';
    }
    board().displayBoard();
    currentPlayer = player1;
  };

  const addMove = (event) => {
    const position = event.target.id.slice(5, 6);
    document.getElementById('alert-msg').innerHTML = '';
    if (position !== '' && board().setField(position, currentPlayer.mark)) {
      let status;
      if (winner(currentPlayer)) {
        status = 'win';
        showEndModal(currentPlayer, status);
      } else if (draw()) {
        status = 'draw';
        showEndModal(currentPlayer, status);
      } else changePlayer();
    }
  };

  const showEndModal = (currentPlayer, status) => {
    if (status === 'win') {
      endModalAction(`${currentPlayer.name} is Winner`);
    } else {
      endModalAction('Game Draw!!!');
    }
  };

  const endModalAction = (msg) => {
    elements.endModal.style.display = 'grid';
    document.getElementById('winner').innerHTML = msg;
    elements.replay.addEventListener('click', () => {
      resetGame();
      elements.endModal.style.display = 'none';
    });
    elements.exit.addEventListener('click', () => {
      window.location.reload();
      elements.endModal.style.display = 'none';
    });
  };

  return {
    init() {
      setupEventListeners();
      setupPlayers(players, elements);
    },
  };
})();

elements.startGame.addEventListener('click', () => {
  controller.init();
});
