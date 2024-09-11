const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0]
  .trim()
  .split(" ")
  .map((num) => Number(num));
const cards = input[1]
  .trim()
  .split(" ")
  .map((num) => Number(num));

let sum = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      let temp = cards[i] + cards[j] + cards[k];
      if (temp > sum && temp <= m) {
        sum = temp;
      }
    }
  }
}

console.log(sum);
