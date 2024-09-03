const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const n = Number(input[0]);
const numbers = input[1].split(" ").map((num) => Number(num));
const v = Number(input[2]);

let count = 0;

for (let i = 0; i < n; i++) {
  if (numbers[i] === v) count++;
}

console.log(count);
