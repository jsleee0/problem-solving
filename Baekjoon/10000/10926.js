const fs = require("fs");
const id = fs.readFileSync(0, "utf-8").toString();

console.log(id.slice(0, id.length - 1) + "??!");
