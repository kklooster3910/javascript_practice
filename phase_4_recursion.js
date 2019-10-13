const range = (start, end, retArr) => {
  var retArr = typeof retArr === 'undefined' ? [] : retArr;
    // retArr.push(start);
  // console.log(retArr);
  if (start == end) {
    retArr.push(start);
    return retArr;
  };
  retArr.push(start);
  return range(start + 1, end, retArr)
}

const sumRec = arr => {
  if (arr.length == 0) return 0;
  return arr[0] + sumRec(arr.slice(1));
}

const exponent = function(base, power) {
  if (power == 0) return 1;
  if (power > 0) {
    return base * exponent(base, power - 1);
  } else {
    return (1 / base) * exponent(base, power + 1); 
  }
}

// fib sequence [1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacci(n, memo = {1: 1, 2: 1}) {
  if (n in memo) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  console.log(memo);
  return memo[n];
}

function deepDup(arr) {
  return arr.map(ele => Array.isArray(ele) ? deepDup(ele) : ele)
}

function bSearch(sortedBoi, target) {
  if (sortedBoi[0] == target) return 0;
  if (sortedBoi.length == 1) return -1;
  let midIdx = Math.floor((sortedBoi.length) / 2);
  if (sortedBoi[midIdx] > target) {
    return bSearch(sortedBoi.slice(0, midIdx), target);
  } else if (sortedBoi[midIdx] == target) {
    return midIdx;
  } else {
    let tempIdx = bSearch(sortedBoi.slice(midIdx + 1), target);
    tempIdx = tempIdx == -1 ? -1 : tempIdx + midIdx + 1;
    return tempIdx;
  }
}

function mergeSort(arr) {
  if (arr.length == 1) return arr;
  let mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

function merge(left, right) {
  let merged = [];

  while(left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      merged.push(left.shift());
    } else if (left[0] >= right[0]) {
      merged.push(right.shift());
    }
  }
  return merged.concat(left, right);
}

// need to do subSets later... moving on to class work 