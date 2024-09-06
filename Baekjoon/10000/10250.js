const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const cases = input.slice(1);

for (const data of cases) {
  const [h, _, n] = data
    .trim()
    .split(" ")
    .map((num) => Number(num));

  const y = (n % h === 0 ? h : n % h) * 100;
  const x = Math.ceil(n / h);

  console.log(y + x);
}
