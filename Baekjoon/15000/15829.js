const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const l = Number(input[0]);
const str = input[1];

let m = 1;
let hash = 0;

for (let i = 0; i < l; i++) {
  hash += (str.charCodeAt(i) - 96) * m;
  hash %= 1234567891;
  m *= 31;
  m %= 1234567891;
}

console.log(Number(hash));
