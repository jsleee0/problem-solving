const fs = require("fs");
const [x, y] = fs.readFileSync(0, "utf-8").toString().split("\n").map(num => Number(num));

if (x > 0) {
  console.log((y > 0) ? 1 : 4);
} else {
  console.log((y > 0) ? 2 : 3);
}