const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const numbers = input.slice(0, input.length - 1).map((num) => Number(num));

for (let num of numbers) {
  let isPalindrome = true;

  for (let i = 10000; i >= 10; i /= 10) {
    if (Math.floor(num / i) === 0) continue;

    if (Math.floor(num / i) === num % 10) {
      num %= i;
      num = Math.floor(num / 10);
      i /= 10;
    } else {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
