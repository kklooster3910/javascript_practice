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
  const func = this;
  const bindTimeArguments = Array.from(arguments).slice(1);

  return _boundFunc = function() {
    const callTimeArguments = Array.from(arguments);
    return func.apply(context,bindTimeArguments.concat(callTimeArguments));
  }
}

Function.prototype.myBind2 = function(ctx, ...otherArgs) {
  return (...callArgs) => this.apply(ctx, otherArgs.concat(callArgs));
}

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind2(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind2(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind2(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind2(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true