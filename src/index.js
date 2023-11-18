// src/calculator.js

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const power = (base, exponent) => Math.pow(base, exponent);

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
};

