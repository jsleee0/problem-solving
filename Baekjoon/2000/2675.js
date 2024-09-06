const cases = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

for (const c of cases) {
  const r = Number(c.split(" ")[0]);
  const s = c.split(" ")[1];

  for (const ch of s) {
    for (let i = 0; i < r; i++) {
      process.stdout.write(ch);
    }
  }

  console.log();
}