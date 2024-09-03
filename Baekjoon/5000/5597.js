const fs = require("fs");
const submit = fs
  .readFileSync(0, "utf-8")
  .toString()
  .split("\n")
  .map((n) => Number(n));

const numberList = Array.from({ length: 30 }, (v, i) => i + 1);

for (let i = 0; i < submit.length - 1; i++) {
  for (let j = 0; j < numberList.length; j++) {
    if (submit[i] === numberList[j]) {
      numberList.splice(j, 1);
    }
  }
}

for (let num of numberList) {
  console.log(num);
}
