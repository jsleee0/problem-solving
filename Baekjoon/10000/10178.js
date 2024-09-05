const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const tn = Number(input[0]);
const cases = input.slice(1, input.length - 1);

for (let i = 0; i < tn; i++) {
  const [c, v] = cases[i].split(" ").map((num) => Number(num));
  const candiesGetChildren = Math.floor(c / v);
  const restOfCandies = c % v;
  console.log(
    `You get ${candiesGetChildren} piece(s) and your dad gets ${restOfCandies} piece(s).`
  );
}
