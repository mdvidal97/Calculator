const assert = require("chai").assert;
const calculator = require("../src/index");
const utils = require("../src/utils");

describe("Calculator", () => {
  it("should add two numbers", () => {
    assert.equal(calculator.add(2, 3), 5);
  });

  it("should subtract two numbers", () => {
    assert.equal(calculator.subtract(5, 3), 2);
  });

  it("should multiply two numbers", () => {
    assert.equal(calculator.multiply(2, 4), 8);
  });

  it("should divide two numbers", () => {
    assert.equal(calculator.divide(10, 2), 5);
  });

  it("should throw an error when dividing by zero", () => {
    assert.throws(() => calculator.divide(10, 0), Error, "Cannot divide by zero");
  });

  it("should calculate the power of a number", () => {
    assert.equal(calculator.power(2, 3), 8);
    assert.equal(calculator.power(3, 0), 1);
    assert.equal(calculator.power(4, 2), 16);
  });
});

describe("Utils", () => {
  it("should return true for even numbers", () => {
    assert.isTrue(utils.isEven(2));
    assert.isTrue(utils.isEven(4));
    assert.isTrue(utils.isEven(0));
  });

  it("should return false for odd numbers", () => {
    assert.isFalse(utils.isEven(3));
    assert.isFalse(utils.isEven(7));
    assert.isFalse(utils.isEven(9));
  });

  it("should return true for positive numbers", () => {
    assert.isTrue(utils.isPositive(1));
    assert.isTrue(utils.isPositive(10));
    assert.isTrue(utils.isPositive(100));
  });

  it("should return false for non-positive numbers", () => {
    assert.isFalse(utils.isPositive(0));
    assert.isFalse(utils.isPositive(-5));
    assert.isFalse(utils.isPositive(-10));
  });
});

