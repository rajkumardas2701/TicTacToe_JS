const field = ['', '', '', '', '', '', '', '', ''];

const board = () => {
  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const DOMStrings = {
    // board: '.board',
    grid: document.querySelector('.board'),
  };

  // const getField = () => field;

  const displayBoard = () => {
    for (let i = 0; i < field.length; i += 1) {
      document.querySelector(`#cell-${i}`).textContent = field[i];
    }
  };

  const setField = (idx, val) => {
    // alert('inside set field');
    // idx.preventDefault();
    // console.log(field);
    if (idx !== '') {
      field[idx] = val;
    }
    displayBoard();
    // console.log(field);
  };


  // console.log(getField);

  // const getWinLines = () => winLines;

  return {
    // field,
    DOMStrings,
    setField,
    displayBoard,
    // displayController,
  };
};

export default board;
