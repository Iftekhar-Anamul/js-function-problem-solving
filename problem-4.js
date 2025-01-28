// 4. তিনটি সংখ্যার মধ্যে সর্বোচ্চ সংখ্যাটি কীভাবে বের করবে?

function findHiestNumber(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return "num1 is Heist Number";
  } else if (num1 < num2 && num2 > num3) {
    return "num2 is Height Number";
  } else if (num3 > (num2 || num3)) {
    return "num3 is Height Number";
  } else {
    return "Equal";
  }
}

console.log(findHiestNumber(40, 15, 30));
console.log(findHiestNumber(20, 50, 40));
console.log(findHiestNumber(50, 35, 60));
