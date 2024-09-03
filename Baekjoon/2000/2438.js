const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString());

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
