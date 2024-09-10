function isPrime(num) {
  if (num === 1) return false;
  else if (num === 2) return true;
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .slice(1)[0]
  .split(" ")
  .map((num) => Number(num));

let count = 0;
for (let num of numbers) {
  if (isPrime(num)) count++;
}

console.log(count);
