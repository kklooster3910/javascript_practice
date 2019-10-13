// monkey patched, returns unique values in an array, strings, integers, etc
// O(n) runtime, linear because we iterate through this once, setting/lookup in a set is constant time
// O(n) space complexity, linear, creating a new array, worst case n, the lenght of this  

Array.prototype.uniq = function() {
  const alreadyIn = new Set();
  let returnBoi = [];
  // debugger;
  this.forEach(ele => {
    if (!alreadyIn.has(ele)) {
      alreadyIn.add(ele);
      returnBoi.push(ele);
    }
  })
  return returnBoi;
}

// return indices of integers that sum to 0
// O(n) running through the array once, not doing any other lookup methods other than storing indices in an object
// could also sort this first and iterate from index 0 and this.length - 1 = end towards the middle to get nlog(n) time
// space O(1)
Array.prototype.twoSum = function(target = 0) {
  // let returnPair = [];
  const memoObj = {};
  
  for (let i = 0; i < this.length; i++) {
    // debugger;
    let potentialMatch = target - this[i];
    if (potentialMatch in memoObj) {
      return [memoObj[potentialMatch], i];
    } else {
      console.log('i', i);
      memoObj[this[i]] = i
      console.log('memoObj', memoObj);
    }
  }
  console.log(memoObj);
  return [];
  // return returnPair;
}

// transpose -- where we have a two dimensional array representing a matrix, don't mutate original
// (O(n^2)) runtime, nested iterations, this is if the subarrays are always same length, same for space
// [[1, 2, 3], [4, 5, 6]]

Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
    let subArray = [];
    for (let j = 0; j < this[i].length; j++) {
      subArray.push(this[j][i]);
    }
    transposed.push(subArray);
  }
  return transposed;
}

// monkey patched version of my each. el is called function style inside of built in forEach as well. Need to be aware when binding this

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    const el = this[i];
    cb(el);    
  }
}

Array.prototype.myMap = function(cb) {
  let mappedArray = [];
  this.myEach(ele => mappedArray.push(cb(ele)));
  return mappedArray
}

Array.prototype.myReduce = function(cb, iV) {
  if (typeof iV === 'undefined') iV = this.shift();
  this.myEach(el => iV = cb(iV, el));
  return iV;
}

const bubbleSort = array => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i + 1], array[i] ];
        sorted = false;
      }
    }
  }
  
  // console.log(array);
  return array;
};

const subStrings = string => {
  let subStrings = [];
  stringChars = string.split('');
  
  for (let i = 0; i < stringChars.length; i++) {
    for (let j = 0; j < stringChars.length; j++) {
      if (i <= j) {
        subStrings.push(string.slice(i, j + 1));
      }
    }
  }
  return subStrings;
}

// rest demo

// var rest;

// [x, y, z, ...rest] = [12, 14, 51, 53, 24, 52, 67, 234]

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(rest);


