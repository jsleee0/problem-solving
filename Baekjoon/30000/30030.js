const fs = require("fs");
const price = Number(fs.readFileSync(0, "utf-8").toString());

console.log(price * (10 / 11));
