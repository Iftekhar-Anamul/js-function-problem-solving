// 2. একটি সংখ্যা জোড় নাকি বিজোড় তা কীভাবে চেক করবে?

function OddOrEven(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(OddOrEven(10));
console.log(OddOrEven(15));
