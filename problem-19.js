// 19. কোনো একজন ব্যক্তির ওজন ইনপুট দিয়ে বলো, সেটি ৫০ কেজি বা তার বেশি কিনা।

function checkWeight(weight) {
  if (weight >= 50) {
    return `${weight} is 50 Kg or over `;
  } else {
    return `${weight} is less than 50 kg`;
  }
}

console.log(checkWeight(40));
console.log(checkWeight(50));
console.log(checkWeight(60));
