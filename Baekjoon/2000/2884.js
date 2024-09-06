const fs = require("fs");
let [h, m] = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num));

if (m - 45 < 0) {
  m = 60 + (m - 45);
  h = h - 1 < 0 ? 23 : h - 1;
} else {
  m = m - 45;
}

console.log(`${h} ${m}`);
