const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, currentItem) => { return total + currentItem; }, 0);
};

// console.log(sum([2, 4, 6, 8, 10]))

const multiply = function (arr) {
  return arr.reduce((total, currentItem) => { return total * currentItem; }, 1);
};

// console.log(multiply([2, 4, 6, 8, 10, 12, 14]))

const power = function (a, b) {
  let result = 1;
  for (i = 1; i < b + 1; i++) {
    result = result * a;
  }
  return result;
};

const factorial = function (a) {
  if (a > 0 && typeof a === "number"
    && Number.isInteger(a)
  ) {
    let arr = [];
    for (i = 0; i < a; i++) {
      arr[i] = a - i;
    }
    return arr.reduce((total, currentItem) => { return total * currentItem; }, 1);
  } else if (a === 0) {
    return 1;
  } else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
