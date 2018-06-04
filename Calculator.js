class Calculator {
  calculate(str) {
    var patt = /[,\n]/i ; 
    if (str === '') { return 0; }
    if (Number.isInteger(str)) {
      return parseInt(str);
    }
    if (str.indexOf(',') !== -1||str.indexOf('\n') !== -1) {
      const sub = str.split(patt);
      return parseInt(sub[0]) + parseInt(sub[1]);
    }
    return undefined;
  }
}
module.exports = Calculator;
