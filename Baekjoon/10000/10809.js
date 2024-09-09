const s = require("fs").readFileSync(0, "utf-8").toString().trim();

let indexes = (function () {
  let obj = {};
  for (const ch of "abcdefghijklmnopqrstuvwxyz") {
    obj[ch] = -1;
  }
  return obj;
})();

for (let i = 0; i < s.length; i++) {
  if (indexes[s[i]] === -1) {
    indexes[s[i]] = i;
  }
}

for (let key in indexes) {
  process.stdout.write(`${indexes[key]} `);
}
