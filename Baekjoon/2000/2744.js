const fs = require("fs");
const word = fs.readFileSync(0, "utf-8").toString();

let answer = "";

for (const ch of word) {
  answer += ch.toLowerCase() === ch ? ch.toUpperCase() : ch.toLowerCase();
}

console.log(answer);
