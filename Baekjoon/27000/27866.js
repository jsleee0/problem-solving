const fs = require("fs");
const [word, i] = fs.readFileSync(0, "utf-8").toString().split("\n");

console.log(word[Number(i) - 1]);
