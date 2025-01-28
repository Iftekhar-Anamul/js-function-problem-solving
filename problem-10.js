// 10. একটি সংখ্যা ০ কিনা তা কীভাবে চেক করবে?

function isNumberZero(number) {
  if (number === 0 || number === -0) {
    return `${number} is Zero(0)`;
  } else {
    return `${number} is not Zero(0)`;
  }
}

console.log(isNumberZero(0));
console.log(isNumberZero(-0));
console.log(isNumberZero(-10));
console.log(isNumberZero(10));
