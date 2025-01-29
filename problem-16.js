// 16. একজন ব্যক্তি দিনের একটি সময় ইনপুট দিলে বলো, এটি সকাল, বিকাল নাকি রাত।
// সকাল: ৬-১২
// বিকাল: ১২-১৮
// // রাত: ১৮-৬

function tellTime(time) {
  if (time > 6 && time <= 12) {
    return `${time} is Morinig`;
  } else if (time > 12 && time <= 18) {
    return `${time} is After Noon`;
  } else if (((time <= 6) && (time > 0))|| (time >= 18) && (time <= 24)) {
    return `${time} is Night`;
  } else {
    return `${time} is does not exist please check your input!!`;
  }
}

console.log(tellTime(0));
console.log(tellTime(5));
console.log(tellTime(6));
console.log(tellTime(10));
console.log(tellTime(12));
console.log(tellTime(16));
console.log(tellTime(18));
console.log(tellTime(20));
console.log(tellTime(24));
console.log(tellTime(25));
