const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((item) => item.split(" ").map((num) => Number(num)));

const [n, m] = input[0];

let answer = "";
for (let i = 1; i < 1 + n; i++) {
  for (let j = 0; j < m; j++) {
    answer += (input[i][j] + input[i + n][j]).toString() + " ";
  }
  answer += "\n";
}

console.log(answer);
