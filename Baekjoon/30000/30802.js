const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0].trim());
const sizes = input[1]
  .trim()
  .split(" ")
  .map((num) => Number(num));
const [t, p] = input[2]
  .trim()
  .split(" ")
  .map((num) => Number(num));

let numberOfTShirtsPairs = 0;
let numberOfPensPairs = Math.floor(n / p);
let numberOfRestPens = n % p;

for (const size of sizes) {
  numberOfTShirtsPairs += Math.ceil(size / t);
}

console.log(`${numberOfTShirtsPairs}`);
console.log(`${numberOfPensPairs} ${numberOfRestPens}`);
