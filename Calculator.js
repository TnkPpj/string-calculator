class Calculator {
  calculate(str) {
    var patt = /[,\n]/i ; 
    if (str === '') { return 0; }
    if (Number.isInteger(str)) {
      if (parseInt(str)<=1000) {
        return parseInt(str);
      }
      return 'over1000';
    }
    // if (str.indexOf(',') !== -1||str.indexOf('\n') !== -1) {
    if (patt.test(str)) {
      const sub = str.split(patt);
      if(sub.length == 2){
        var sum1;
        sum1 = parseInt(sub[0]) + parseInt(sub[1]);
        return sum1;
      }
      else if(sub.length == 3){
        var sum2;
        sum2 = parseInt(sub[0]) + parseInt(sub[1])+parseInt(sub[2]);
        return sum2;
    }
    return undefined;
  }
}
}
module.exports = Calculator;
