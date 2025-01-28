// 14. কোনো একটি সংখ্যার মান ইনপুট দিয়ে বলো, সেটি একক ডিজিটের (single-digit) সংখ্যা কিনা।

function isSingleDigit(number) {
  if (number <= 9 && number >= -9) {
    return `${number} is Single Digit`;
  } else {
    return `${number} is multi digit`;
  }
}

console.log(isSingleDigit(10));
console.log(isSingleDigit(9));
console.log(isSingleDigit(0));
console.log(isSingleDigit(-5));
console.log(isSingleDigit(-9));
console.log(isSingleDigit(-10));