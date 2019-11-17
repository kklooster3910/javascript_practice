function sum (nums) {
  let sum = 0;
  for (let i=0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

const spreadSum = function (...nums) {
  // console.log(nums)
  let sum = 0;
  for (let i=0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// console.log(spreadSum(1, 2, 3, 4) === 10);
// console.log(spreadSum(1, 2, 3, 4, 5) === 15);

const nums = [1,2,3,4,5]

// console.log('first', ...nums)

function spreadTest (...nums) {
  console.log('second', nums);
  console.log('third', ...nums);
}

// console.log(test(1,2,3,4))

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind1 = function(context) {
  const functionToInvoke = this;
  bindTimeArgs = Array.from(arguments).slice(1);
  return function _boundFunc() {
    return functionToInvoke.apply(context, bindTimeArgs.concat(Array.from(arguments)))
  }
}

Function.prototype.myBind2 = function(ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs))
}

// markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind2(pavlov);
// notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

// markov.says.myBind1(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind1(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind1(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays2 = markov.says.myBind1(pavlov);
// notMarkovSays2("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
  let nums = [];
  let sum = 0;
  function _curriedSum(num) {
    nums.push(num);
    if (nums.length === numArgs) { 
      nums.forEach(num => sum += num)
      return sum;
    } else {
      return _curriedSum;
    }
 }
  return _curriedSum;
}

// const sumCurry = curriedSum(3);
// console.log(sumCurry(1)(2)(3));

// console.log(curriedSum(5)(10)(10)(15)(5)(10))