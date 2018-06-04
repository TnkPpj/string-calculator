const chai = require('chai');
const Calculator = require('../Calculator');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
}

function itShouldBeZero() {
  const cal1 = new Calculator();
  expect(cal1.calculate('')).to.be.equal(0);
}

function testEmptyString() {
  it('should be zero', itShouldBeZero);
}

function itShouldBeValue() {
  const cal1 = new Calculator();
  expect(cal1.calculate(0)).to.be.equal(0);
  expect(cal1.calculate(1)).to.be.equal(1);
  expect(cal1.calculate(Number.MIN_SAFE_INTEGER)).to.be.equal(Number.MIN_SAFE_INTEGER);
  expect(cal1.calculate(Number.MAX_SAFE_INTEGER)).to.be.equal(Number.MAX_SAFE_INTEGER);
}

function itShouldBeSum() {
  const cal1 = new Calculator();
  expect(cal1.calculate('0,1')).to.be.equal(1);
  expect(cal1.calculate('0,-1')).to.be.equal(-1);
  expect(cal1.calculate('9,2')).to.be.equal(11);
  expect(cal1.calculate('9\n8')).to.be.equal(17);
  expect(cal1.calculate('1,2,3')).to.be.equal(6);
  expect(cal1.calculate('2\n3\n4')).to.be.equal(9);
}

function testNumber() {
  it('should be value', itShouldBeValue);
  it('should be sum', itShouldBeSum);
}

// Start Describe
describe('Example', exampleBehaviors);
describe('Empty string should return zero', testEmptyString);
describe('A single number should return value', testNumber);
