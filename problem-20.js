// 20. দুটি সংখ্যা ইনপুট দিয়ে বলো, তাদের মধ্যে গুণফল বড় সংখ্যা দিয়ে ভাগ করা যায় কিনা।


function multiplyAndCheckDivisible (num1, num2) {
    var multiplication = num1 * num2;

    if (num1 > num2) {
        // return multiplication / num1;

        if (multiplication % num1 === 0) {
            return `you can divide with heist number ${num1}`
        } else {
            return `you can't divide with heist number`
        }
    } else {
        // return multiplication / num2;
        if (multiplication % num2 === 0) {
             return `you can divide with heist number ${num2} (2 er 1)`
        } else {
            return `you can't divide with heist number (2 er 2)`
        }
    }
}

console.log(multiplyAndCheckDivisible(20, 10));
console.log(multiplyAndCheckDivisible(5, 10));
console.log(multiplyAndCheckDivisible(7, 12))