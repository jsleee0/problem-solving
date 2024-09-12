const input = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n");

const numbers = input.slice(0, input.length - 1).map((num) => Number(num));

// 1011
for (let num of numbers) {
  let isPalindrome = true;
  let i = 10000;

  while (Math.floor(num / i) === 0) i /= 10;

  for (; i >= 10; i /= 10) {
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
