// import { expect, test } from '@jest/globals';
// import { describe } from 'yargs';
// import { beforeEach } from '@jest/globals';
import { board } from '../board';
// const displayBoard = () => {

// };
// beforeEach(() => {
//   const sampleCell = document.createElement('div');
//   sampleCell.setAttribute('id', 'cell');
// });

// beforeEach(() => {
// document.body.innerHTML = '<div>'
//   + '  <div id="cell-0" />'
//   + '  <div id="cell-1" />'
//   + '  <div id="cell-2" />'
//   + '  <div id="cell-3" />'
//   + '  <div id="cell-4" />'
//   + '  <div id="cell-5" />'
//   + '  <div id="cell-6" />'
//   + '  <div id="cell-7" />'
//   + '  <div id="cell-8" />'
//   + '</div>';
// const sampleCell = document.querySelector(`#cell-1`);
// for (let i = 0; i < field.length; i += 1) {
//   document.createElement(`#cell-${i}`);
// }

// const test1 = board().displayBoard();
//   const displayBoard = () => {
//     for (let i = 0; i < field.length; i += 1) {
//       document.createElement('#cell-${i}');
//     }
//   };
// });

test('board', () => {
  const sample = board();
  // it('sets field on the board', () => {
  expect(sample.setField(0, 'X')).toBeTruthy();
  // });
});