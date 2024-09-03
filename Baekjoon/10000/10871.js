const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const [n, x] = input[0].split(" ").map((num) => Number(num));
const numbers = input[1].split(" ").map((num) => Number(num));

for (let i = 0; i < n; i++) {
  if (numbers[i] < x) {
    process.stdout.write(numbers[i].toString() + " ");
  }
}
