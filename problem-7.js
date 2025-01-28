// 7. একজন ব্যক্তি ভোট দিতে পারবে কিনা তা কীভাবে নির্ধারণ করবে? (ভোটের বয়স ≥ ১৮)

function isEligibleForVoat(age) {
  if (age >= 18) {
    return `${age} can voat`;
  } else {
    return `${age} can't voat`;
  }
}

console.log(isEligibleForVoat(17));
console.log(isEligibleForVoat(18));
console.log(isEligibleForVoat(30));
