// 3. একজন শিক্ষার্থী পাস করেছে কিনা তা কীভাবে নির্ধারণ করবে? (পাস মার্ক = ৩৩)

function isPassOrFail(examResult) {
  if (examResult >= 33) {
    return "Passed";
  } else {
    return "Fail!";
  }
}

console.log(isPassOrFail(33));
console.log(isPassOrFail(50));
console.log(isPassOrFail(20));
