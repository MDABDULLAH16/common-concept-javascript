let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let numbers = [23, 43, 53, 64, 65];
// console.log(numbers);
let number = numbers;
console.log("after change", number);
number = [11, 22, 33];
console.log("after push", number);
