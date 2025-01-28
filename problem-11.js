// 11. তিনটি সংখ্যার যোগফল ১০০-এর বেশি কিনা তা কীভাবে বের করবে?

function sumAndCheck(num1, num2, num3) {
  var sum = num1 + num2 + num3;

  if (sum > 100) {
    return `${sum} is the sum of 3 numbers and bigger than 100`;
  } else if (sum === 100) {
    return `${sum} is the sum of 3 numbers equal 100`;
  } else if (sum < 100) {
    return `${sum} is less than 100 which are summation of three numbers`;
  }
}

console.log(sumAndCheck(80, 20, 20));
console.log(sumAndCheck(80, 12, 8));
console.log(sumAndCheck(70, 10, 10));
