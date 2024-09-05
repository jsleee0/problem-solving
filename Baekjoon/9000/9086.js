const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const t = Number(input[0]);
const tc = input.slice(1, input.length - 1);

for (let i = 0; i < t; i++) {
  console.log(tc[i][0] + tc[i][tc[i].length - 1]);
}
