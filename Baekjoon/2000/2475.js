const fs = require("fs");
const nums = fs
  .readFileSync(0, "utf-8")
  .toString()
  .split(" ")
  .map((num) => Number(num));

let sum = 0;
for (const num of nums) {
  sum += num * num;
}

console.log(sum % 10);
