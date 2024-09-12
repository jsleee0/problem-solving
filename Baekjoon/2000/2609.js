function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

const [a, b] = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

let i, j;

if (a > b) {
  i = a;
  j = b;
} else {
  i = b;
  j = a;
}

console.log(gcd(i, j));
console.log((i * j) / gcd(i, j));
