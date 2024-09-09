const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const cases = input.slice(0, input.length - 1);

for (const tc of cases) {
  const [a, b, c] = tc
    .trim()
    .split(" ")
    .map((num) => Number(num));
  let longest;
  let l1, l2;

  if (a > b && a > c) {
    longest = a;
    l1 = b;
    l2 = c;
  } else if (b > a && b > c) {
    longest = b;
    l1 = a;
    l2 = c;
  } else {
    longest = c;
    l1 = a;
    l2 = b;
  }

  if (l1 * l1 + l2 * l2 === longest * longest) console.log("right");
  else console.log("wrong");
}
