const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const length = Number(input[0]);
let answer = "";

for (let i = 1; i <= length; i++) {
  const [a, b] = input[i].split(" ").map((num) => Number(num));
  answer += `${a + b}\n`;
}

console.log(answer);
