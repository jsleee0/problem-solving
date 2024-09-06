const fs = require("fs");
const numbers = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

let maxNum = 0;
let index;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
    index = i + 1;
  }
}

console.log(maxNum);
console.log(index);
