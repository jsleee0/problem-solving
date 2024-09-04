const fs = require("fs");
const word = fs.readFileSync(0, "utf-8").toString();

let i = 0;
let count = 0;
while (word[i++] !== undefined) count++;

console.log(--count);
