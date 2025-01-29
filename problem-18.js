// 18. একটি সংখ্যা ইনপুট দিয়ে বলো, সেটি পজিটিভ জোড় সংখ্যা কিনা।

function isPositiveEven(number) {
  if (number > 0 && number % 2 === 0) {
    return `${number} is Positive Odd Number`;
  } else if (number > 0 && number % 2 === 1) {
    // else if ((number > 0) && (number % 2 !== 0)
    return `${number} is Odd number`;
  } else if (number < 0) {
    return `${number} is Negative Number`;
  } else if (number === 0) {
    return `${number} is Zero`;
  }
}

console.log(isPositiveEven(0));
console.log(isPositiveEven(-4));
console.log(isPositiveEven(7));
console.log(isPositiveEven(10));
