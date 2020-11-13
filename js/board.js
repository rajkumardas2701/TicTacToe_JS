const board = () => {
  const field = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
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

  // const getField = () => { field };

  // console.log(getField);

  // const getWinLines = () => winLines;

  return {
    // getField,
    field,
  };
};

// board();

export default board;
