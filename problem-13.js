// 13. একজন শিক্ষার্থী ৫টি সাবজেক্টের নাম্বার ইনপুট দিলে বলো, সে পাশ করেছে কিনা। (প্রত্যেক সাবজেক্টে = ৩৩ হলে পাস)

function isPassOrFail(num1, num2, num3, num4, num5) {
  if (num1 >= 33 && num2 >= 33 && num3 >= 33 && num4 >= 33 && num5 >= 33) {
    var sumOfNumber = num1 + num2 + num3 + num4 + num5;
  }

  var averageResult = sumOfNumber / 5;

  if (averageResult >= 33) {
    return `${averageResult} is average of 5 subject and you Passed`;
  } else {
    return `you fail in the exam`;
  }
}

console.log(isPassOrFail(40, 40, 35, 60, 40));
