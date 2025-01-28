// 6. কোনো একটি সংখ্যা ১০ দিয়ে বিভাজ্য কিনা তা কীভাবে নিশ্চিত করবে? 


function isDivisibleBY10 (number) {
    if (number % 10 === 0) {
        return `${number} is divisible by 10`;
    } else {
        return `${number} is not divisible by 10`;
    }
}


console.log(isDivisibleBY10(100));
console.log(isDivisibleBY10(99));
console.log(isDivisibleBY10(0));
console.log(isDivisibleBY10(-10));