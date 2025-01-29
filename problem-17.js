// 17. একটি পাসওয়ার্ড ইনপুট দিয়ে বলো, সেটি ৮ ক্যারেক্টারের বেশি কিনা। 

// it is so confusing

function validatePassword (password) {
    if (password >= 10000000) {
        return `${password} is 8 number or over 8 number`;
    } else {
        return `${password} is less than 8 number`;
    }
}  

console.log(validatePassword(10000000));
// console.log(validatePassword(00000000));
console.log(validatePassword(98736478));
console.log(validatePassword(98765892));
console.log(validatePassword(987692));