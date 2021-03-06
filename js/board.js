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
    grid: document.querySelector('.board'),
  };


  const displayBoard = () => {
    for (let i = 0; i < field.length; i += 1) {
      document.querySelector(`#cell-${i}`).textContent = field[i];
    }
  };

  const setField = (idx, val) => {
    let success = false;
    const altmsg = 'Please pick correct cell';
    if (field[idx] !== '') {
      document.getElementById('alert-msg').innerHTML = altmsg;
      success = false;
    }
    if (idx !== '' && field[idx] === '') {
      field[idx] = val;
      success = true;
    }
    displayBoard();
    return success;
  };

  return {
    DOMStrings,
    setField,
    displayBoard,
    winLines,
  };
};

export { board, field };
