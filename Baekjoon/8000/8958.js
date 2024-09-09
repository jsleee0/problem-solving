const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(1);

for (let c of cases) {
  c = c.trim();
  let score = 0;
  let streak = 0;

  for (let ch of c) {
    if (ch === "O") {
      streak++;
      score += streak;
    } else {
      streak = 0;
    }
  }

  console.log(score);
}
