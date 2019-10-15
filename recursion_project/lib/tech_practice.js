// Write a function called whatever that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// "((()()))" => true
// "()" => true
// "())" => false
// "()()" => true
// ")()()" => false
// ")(" => false

// ( ( )( ) ( ( (  (  )  (  ( )  )  )

// function isValid(str) {
//   str = str.split('');
//   if (str.length === 0) return true;
//   let counter = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '('){
//       // counter = counter !== null ? 0 : 
//       counter++
//     } else if (str[i] === ')') {
//       counter--
//     }
//     // console.log(counter);
//     if (counter < 0) return false;
//   }
//   let returnValue = counter === 0 ? true : false;
//   return returnValue;
// }

// console.log(isValid("((()()))")); // true
// console.log(isValid("())")); // false
// console.log(isValid(")(")); // false





// You are given a two-dimensional array (matrix) of distinct integers where each row is sorted and each column is also sorted.
// The matrix does not necessarily have the same height and innerWidth. You are also given a target Number, and you must write a
// function that returns an array of the row and column indices of the targetnumber if it is contained in the matrix and
// [-1, -1] if it's not in the matrix
// 0, k.length - 1
// Sample input:
// [
//   [1, 4, 7, 12, 15, 1000],
//   [2, 5, 19, 31, 32, 1001],
//   [3, 8, 24, 33, 35, 1002],
//   [40, 41, 42, 44, 45, 1003],
//   [99, 100, 103, 106, 128, 1004]
// ], 44
// sample output: [3, 3]


function searchInSortedMatrix(matrix, target) {
    let i = 0;
  let j = 0;
  while (true) {
      if(j === matrix[i].length) {
          j = 0;
      }
      if(matrix[i][j] < target) {
          j++;
      }
      else if(matrix[i][j] > target) {
          i++;
      }
      else return [i, j]
  }
  return [-1, -1]
}

// Sample input:
// [
//   [1, 4, 7, 12, 15, 1000],
//   [2, 5, 19, 31, 32, 1001],
//   [3, 8, 24, 33, 35, 1002],
//   [40, 41, 42, 44, 45, 1003],
//   [99, 100, 103, 106, 128, 1004]
// ], 1001
// sample output: [3, 3]
const matrix = [
  [1, 4, 7, 12, 15, 1000],
  [2, 5, 19, 31, 32, 1001],
  [3, 8, 24, 33, 35, 1002],
  [40, 41, 42, 44, 45, 1003],
  [99, 100, 103, 106, 128, 1004]
];
console.log(matrix);
console.log(searchInSortedMatrix(matrix, 1001));

function searchInSortedMatrix(matrix, target) {
  let startIdx = 0;
  let endIdx = matrix[0].length - 1;

  while (startIdx < matrix.length && endIdx >= 0) {
    if (matrix[startIdx][endIdx] > target) {
      endIdx--;
    } else if (matrix[startIdx][endIdx] < target) {
      startIdx++;
    } else {
      return [startIdx, endIdx];
    }
  }
  return [-1, -1]
}

// function searchInSortedMatrix(matrix, target) {
//     for(let i = 0; i < matrix.length; i++) {
//         const subArr = matrix[i];
//         for(let j = 0; j < subArr.length; i++) {
//             if(matrix[i][j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [-1, -1];
// }







































































