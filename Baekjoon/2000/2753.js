const fs = require("fs");
const year = Number(fs.readFileSync(0, "utf-8").toString());

console.log(((year % 4 === 0 && year % 100 !== 0) | (year % 400 === 0)) ? 1 : 0);