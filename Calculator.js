class Calculator {
  calculate(str) {
    if (str === '') { return 0; }
    else if (str >= '0' && str <= '9') {
      return str - '0';
    }
    return null;
  }
}
module.exports = Calculator;
