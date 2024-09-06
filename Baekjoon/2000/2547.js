const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n\n");

let result = "";

for (let i = 1; i < input.length; i++) {
  const candies = input[i]
    .trim()
    .split("\n")
    .map((n) => BigInt(n));

  let sum = 0n;
  for (let j = 1; j < candies.length; j++) {
    sum += candies[j];
  }

  result += sum % (BigInt(candies.length) - 1n) === 0n ? "YES\n" : "NO\n";
}

console.log(result);
