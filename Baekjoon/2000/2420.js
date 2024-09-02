const fs = require("fs");
const [n, m] = fs.readFileSync(0, "utf-8").toString().split(" ").map(num => Number(num));

console.log((n - m < 0) ? (n - m) * -1 : n - m);