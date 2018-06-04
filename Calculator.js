class Calculator {
  calculate(str) {
    var patt = /[,\n]/i ; 
    if (str === '') { return 0; }
    if (Number.isInteger(str)) {
      return parseInt(str);
    }
    if (str.indexOf(',') !== -1||str.indexOf('\n') !== -1) {
      const sub = str.split(patt);
      if(sub.length == 2){
        var sum1;
        sum1 = parseInt(sub[0]) + parseInt(sub[1]);
        console.log(sum1 +"sum from two numbers\n");
        return sum1;
      }
      else if(sub.length == 3){
        var sum2;
        sum2 = parseInt(sub[0]) + parseInt(sub[1])+parseInt(sub[2]);
        console.log(sum2 +"sum from three numbers\n");
        return sum2;
    }
    return undefined;
  }
}
}
module.exports = Calculator;
