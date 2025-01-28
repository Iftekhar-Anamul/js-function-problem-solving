// 12. কোনো একটি বছরের সংখ্যা ইনপুট দিয়ে বলো, সেটি লিপ ইয়ার (Leap Year) কিনা।

function isLeapYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return `${year} is Leap Year`;
  } else {
    return `${year} is not a Leap Year`;
  }
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2200));
console.log(isLeapYear(2300));
