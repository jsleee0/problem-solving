const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const scores = input[1].split(" ").map((num) => Number(num));
const max = Math.max(...scores);
let sum = 0;

for (const score of scores) {
  sum += (score / max) * 100;
}

console.log(sum / n);
