// Write a function, lucasNumberMemo(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively with memoization.
//
// Examples:
//
// lucasNumberMemo(0)   // => 2
// lucasNumberMemo(1)   // => 1
// lucasNumberMemo(40)  // => 228826127
// lucasNumberMemo(41)  // => 370248451
// lucasNumberMemo(42)  // => 599074578
function lucasNumberMemo(n, memo = { 0: 2, 1: 1 }) {
  if (n in memo) return memo[n];
  memo[n] = lucasNumberMemo(n - 2, memo) + lucasNumberMemo(n - 1, memo);
  return memo[n];
}

// Write a function, minChange(coins, amount), that accepts an array of coin values
// and a target amount as arguments. The method should return the minimum number of coins needed
// to make the target amount. A coin value can be used multiple times.
//
// After you pass the first 3 examples, you'll likely need to memoize your code
// in order to pass the 4th example in a decent runtime.
//
// Examples:
//
// minChange([1, 2, 5], 11)         // => 3, because 5 + 5 + 1 = 11
// minChange([1, 4, 5], 8))         // => 2, because 4 + 4 = 8
// minChange([1, 5, 10, 25], 15)    // => 2, because 10 + 5 = 15
// minChange([1, 5, 10, 25], 100)   // => 4, because 25 + 25 + 25 + 25 = 100

function minChange(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (amount in memo) return memo[amount];
  let totalCoins = [];
  coins.forEach(coin => {
    if (coin <= amount) {
      memo[amount] = minChange(coins, amount - coin, memo) + 1;
      totalCoins.push(memo[amount]);
    }
  });
  return Math.min(...totalCoins);
  // return totalCoins.sort((a, b) => a - b)[0]
}

// console.log(minChange([1, 2, 5], 11));
// console.log(minChange([1, 4, 5], 8));
// console.log(minChange([1, 5, 10, 25], 15));
// console.log(minChange([1, 5, 10, 25], 100));

// Given a string containing just the characters ‘(’, ‘)’, ‘{’, ‘}’, ‘[’ and ‘]’, determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: “()”
// Output: true
// Example 2:
// Input: “()[]{}”
// Output: true
// Example 3:
// Input: “(]”
// Output: false
// Example 4:
// Input: “([)]”
// Output: false
// Example 5:
// Input: “{[]}”
// Output: true

/// ()()()()()()()(())((()()) => counter++ or counter--

// Input: “([)]”

const isValidBrackets = string => {
  string = string.split("");
  let pCounter = 0; // ()
  let curlyCounter = 0;
  let squareCounter = 0; // []
  // let mostRecent;
  let mostRecentQue = [];
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    let bracketToClose;
    switch (currentCharacter) {
      case "(":
        pCounter++;
        mostRecentQue.push("parenthesis");
        break;
      case ")":
        bracketToClose = mostRecentQue.pop();
        if (bracketToClose !== "parenthesis") return false;
        pCounter--;
        break;
      case "{":
        curlyCounter++;
        mostRecentQue.push("curlyBoi");
        break;
      case "}":
        bracketToClose = mostRecentQue.pop();
        if (bracketToClose !== "curlyBoi") return false;
        curlyCounter--;
        break;
      case "[":
        squareCounter++;
        mostRecentQue.push("squareBoi");
        break;
      case "]":
        bracketToClose = mostRecentQue.pop();
        if (bracketToClose !== "squareBoi") return false;
        squareCounter--;
        break;
      default:
    }

    if (pCounter < 0 || curlyCounter < 0 || squareCounter < 0) return false;
  }

  if (pCounter != 0 || curlyCounter != 0 || squareCounter != 0) return false;
  return true;
};

function isValidBrackets2(string) {
  const lastTypeOpened = [];
  const openers = ["{", "(", "["];
  const groups = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (openers.includes(char)) {
      lastTypeOpened.push(char);
    } else if (char === groups[lastTypeOpened[lastTypeOpened.length - 1]]) {
      lastTypeOpened.pop();
    } else return false;
  }
  return lastTypeOpened.length === 0 ? true : false;
}

// console.log(isValidBrackets('([)]')) // => false
// console.log(isValidBrackets('([])')) // => true
// console.log(isValidBrackets('(){}[]')) // => true
// console.log(isValidBrackets('(}')) // => false
// console.log(isValidBrackets('{[]}')) // => true

// You are given an array of integers. Each integer represents a jump of its value in the array. For instance, the integer 2 represents a jump of 2 indices forward
// in the array, the integer -3 represents a jump of 3 indices backward in the array. If a jump spills past the array's bounds, it wraps over to the other side. For
// instance a jump of -1 at the index 0 brings us to the last index in the array. Similarly, a jump of 1 at the last index in the array brings us to index 0. Write a function
// that returns a boolean representing whether the jumps in the array form a single cycle. A single cycle occurs if, starting at any index in the array and
// following the jumps, every element is visited exactly once before landing back on the starting index.

// to return true...

//each element can only be visited once and you must lang from where you started from.

// to return false...
// visit the same element more than once.
// doesnt hit all elements
// movesMade length has to match sampleInput length as well as all nums in it

// if (counter.length < input.length){

// } return true

// for (i=0;)
// i = array[i] // set the index to the value of current idx within arr

// idx =

// sample input: [2, 3, 1, -4, -4, 2]
// Sample Output: True
//

// input: [2, 2, -1]
// counter: arr[0]
// output: true

//movesMade = [2]
//needToLandOn = [start]
// increment =

// input: [2, 2, 2]
// output: true

// input: [1, 1, 1, 1, 2]
// output: false

// input: [1, 1, 0, 1, 1]
// output: false

// input: [1,1,1]
// output: false

function validMove(array) {
  let idx = 0;
  let counter = 0;

  while (counter < array.length) {
    if (counter > 0 && idx === 0) return false;
    counter++;
    idx = getCurrentIdx(idx, array); 
  }
  return idx === 0
}

function getCurrentIdx(idx, array) {
  const jump = array[idx];
  const nextIdx = (jump + idx) % array.length;
  return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

// 2 % 6 = 2 
// 3 % 14 = 3
// 4 % 15 = 

// sample input: [2, 3, 1, -4, -4, 2]
// Sample Output: True

console.log(validMove([1, 1, 0, 1, 1]));
// counter = 1

console.log(validMove([2, 2, 2]));

module.exports = {
  lucasNumberMemo,
  minChange
};
