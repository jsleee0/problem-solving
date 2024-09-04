const fs = require("fs");
const ch = fs.readFileSync(0, "utf-8").toString();

console.log(ch.charCodeAt());
