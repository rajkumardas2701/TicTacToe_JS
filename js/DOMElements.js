export const cells = [...document.querySelectorAll('.cell')];
export const grid = document.querySelector('.board');
export const startModal = document.querySelector('#start-modal');
export const playerOneInput = startModal.querySelector('#p1');
export const playerTwoInput = startModal.querySelector('#p2');
export const startGame = startModal.querySelector('button');
export const playerOne = document.querySelector('#player-one');
export const playerTwo = document.querySelector('#player-two');
export const endModal = document.querySelector('#end-modal');
export const restartButton = endModal.querySelector('button');
export const replay = document.getElementById('new-game');
export const exit = document.getElementById('end-game');


startGame.addEventListener('click', e => {
  e.preventDefault();
  startModal.style.display = 'none';
});
