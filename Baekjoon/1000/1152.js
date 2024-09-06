const input = require("fs").readFileSync(0, "utf-8").toString().trim();
const words = input.split(" ");

let count = 0;
while (words[count] !== undefined) count++;

console.log((input.length === 0) ? 0 : count);