// 1. দুটি সংখ্যার মধ্যে কোন সংখ্যাটি বড়?

function LargestNumber(num1, num2) {
  if (num1 > num2) {
    console.log("num 1 is Largest Number");
  } else if (num1 === num2) {
    console.log("Both are same or Equal");
  } else {
    console.log("num2 is Largest Number");
  }
}

LargestNumber(20, 10);
LargestNumber(10, 10);
LargestNumber(20, 10);
