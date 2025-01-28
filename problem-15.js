// 15. দুটি নাম্বার দিয়ে বলো, তাদের যোগফল ৫০-এর সমান কিনা।

function sumAndCheck(num1, num2) {
  sum = num1 + num2;

  if (sum === 50) {
    return `${sum} is equal to 50`;
  } else if (sum > 50) {
    return `${sum} is bigger than 50`;
  } else {
    return `${sum} is smaller than 50`;
  }
}

console.log(sumAndCheck(30, 20));
console.log(sumAndCheck(40, 30));
console.log(sumAndCheck(30, 10));
