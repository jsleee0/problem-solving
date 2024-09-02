const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().split(" ").map(num => Number(num));

console.log(a + b);