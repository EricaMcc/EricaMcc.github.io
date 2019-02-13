
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  for (let str = '#'; str.length <= num; str+='#') {
    console.log(str);
  }
}

triangles(8);
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(numX, numY) {
  let chessBoard = '';
  let str1 = '';
  let str2 = '';
  for (let i = 1; i <= numX; i++) {
    str1 += '# ';
    str2 += ' #';
  }
  for (let i = 1; i <= numY; i++) {
    if (i % 2 === 1) {
      chessBoard += str1 + '\n'; 
    } else {
      chessBoard += str2 + '\n';
    }
  }
  // if (num % 2 === 1) {
  //     str += ' # # # #'; 
  // } else {
  //     str += '# # # #'
  // }
  console.log(chessBoard);
}

drawChessboard(2, 3);

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}