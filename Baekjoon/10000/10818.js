const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const numbers = input[1]
  .trim()
  .split(" ")
  .map((num) => Number(num));

let max = -1_000_001;
let min = 1_000_001;

for (const num of numbers) {
  max = num > max ? num : max;
  min = num < min ? num : min;
}

console.log(`${min} ${max}`);
