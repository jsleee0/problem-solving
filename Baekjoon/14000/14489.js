const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().split("\n");

const [a1, a2] = input[0].split(" ").map((num) => Number(num));
const priceOfChicken = Number(input[1]);

if (a1 + a2 >= priceOfChicken * 2) {
  console.log(a1 + a2 - priceOfChicken * 2);
} else {
  console.log(a1 + a2);
}
