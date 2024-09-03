const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString());

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
