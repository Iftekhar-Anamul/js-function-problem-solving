// ৪. প্রাপ্ত নাম্বার দিয়ে শিক্ষার্থীর গ্রেড কীভাবে নির্ধারণ করবে?
// ৮০ বা তার বেশি = A+
// ৭০-৭৯ = A
// 0 ৬০-৬৯ = A-
// 0 ৩৩-৫৯ = Passed
// 0 ৩৩ এর কম = Failed

function collectGrade(examResult) {
  if (examResult >= 80 && examResult <= 100) {
    return `${examResult} is A+`;
  } else if (examResult >= 70 && examResult <= 79) {
    return `${examResult} is A`;
  } else if (examResult <= 69 && examResult >= 60) {
    return `${examResult} is A-`;
  } else if (examResult <= 59 && examResult >= 33) {
    return `${examResult} is Passed`;
  } else if (examResult >= 0 && examResult <= 33) {
    return `${examResult} is Failed`;
  } else {
    return `${examResult} does not exits this number please check it again`;
  }
}

console.log(collectGrade(200));
console.log(collectGrade(80));
console.log(collectGrade(79));
console.log(collectGrade(69));
console.log(collectGrade(60));
console.log(collectGrade(59));
console.log(collectGrade(33));
console.log(collectGrade(32));
console.log(collectGrade(0));
console.log(collectGrade(20));
console.log(collectGrade(105));
