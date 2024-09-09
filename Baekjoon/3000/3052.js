const numbers = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

let remainders = [];
let count = 0;

for (const num of numbers) {
  let remainder = num % 42;
  if (!remainders.includes(remainder)) {
    count++;
    remainders.push(remainder);
  }
}

console.log(count);
