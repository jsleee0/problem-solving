const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString());

let result = 1;

for (let i = n; i >= 2; i--) {
  result *= i;
}

console.log(result);
