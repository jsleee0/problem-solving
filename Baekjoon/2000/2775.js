const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

const cases = input.slice(1);

for (let i = 0; i < cases.length; i += 2) {
  const k = cases[i];
  const n = cases[i + 1];

  const houses = [];
  for (let j = 0; j <= k; j++) houses.push([]);
  for (let j = 1; j <= n; j++) houses[0].push(j);
  for (let j = 1; j <= k; j++) houses[j].push(1);

  for (let f = 1; f <= k; f++) {
    for (let rn = 1; rn < n; rn++) {
      houses[f].push(houses[f - 1][rn] + houses[f][rn - 1]);
    }
  }

  console.log(houses[k][n - 1]);
}
