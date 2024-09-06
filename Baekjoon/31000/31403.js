const fs = require("fs");
const [a, b, c] = fs.readFileSync(0, "utf-8").toString().split("\n");

console.log(Number(a) + Number(b) - Number(c));
console.log(Number(a + b) - Number(c));
