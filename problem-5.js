// 5. একটি সংখ্যার ধনাত্মক নাকি ঋণাত্মক তা কীভাবে যাচাই করবে?

function isPositiveOrNegative(number) {
  if (number > 0) {
    return `${number} is positive Number`;
  } else if (number === 0) {
    return `${number} is Zero`;
  } else {
    return `${number} is Negative Number`;
  }
}

console.log(isPositiveOrNegative(10));
console.log(isPositiveOrNegative(15.4));
console.log(isPositiveOrNegative(0));
console.log(isPositiveOrNegative(-5.5));
