const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n\n");

const t = Number(input[0].trim());
const cases = input.slice(1).map((data) => {
  return data
    .trim()
    .split("\n")
    .map((num) => Number(num));
});

for (let i = 0; i < t; i++) {
  let sum = 0;
  cases[i].forEach((num) => (sum += num));
  console.log(sum % cases[i].length === 0 ? "YES" : "NO");
}
