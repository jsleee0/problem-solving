const fs = require("fs");
const [a, b] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((num) => Number(num));

console.log(a + b);
