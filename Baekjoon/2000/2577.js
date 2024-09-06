const [a, b, c] = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(num => Number(num));

let abc = a * b * c;
let numCounts = [...Array(10).fill(0)];

while (abc !== 0) {
  numCounts[abc % 10]++;
  abc = Math.floor(abc / 10);
}

numCounts.forEach(count => console.log(count));