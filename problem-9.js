// 9. দুটি সংখ্যার মধ্যে কোনটি ছোট তা কীভাবে নির্ণয় করবে?

function findLowestNumber(num1, num2) {
  if (num1 > num2) {
    return `${num2} is Lowest Number than ${num1}`;
  } else {
    return `${num1} is Lowest Number than ${num2}`;
  }
}

console.log(findLowestNumber(10, 20));
console.log(findLowestNumber(20, 10));
