const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const cases = input.slice(1, input.length - 1);

for (let c of cases) {
  const [a, b] = c.split(" ").map((num) => Number(num));
  console.log(a + b);
}
