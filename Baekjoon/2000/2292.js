const n = Number(require("fs").readFileSync(0, "utf-8").toString().trim());

let roomNum = 1;
let count = 1;

while (roomNum < n) {
  roomNum = roomNum + 6 * count++;
}

console.log(count);
