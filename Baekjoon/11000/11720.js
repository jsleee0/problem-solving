const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const numbers = input[1].split("").map((num) => Number(num));

let sum = 0;
for (const num of numbers) {
  sum += num;
}

console.log(sum);
