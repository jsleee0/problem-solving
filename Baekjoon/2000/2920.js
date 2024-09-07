const scale = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split(" ")
  .map(num => Number(num));

let flag = true;

if (scale[0] === 1) {
  for (let i = 0; i < scale.length; i++) {
    if (scale[i] !== i + 1) {
      console.log("mixed");
      flag = false;
      break;
    }
  }
  flag && console.log("ascending");
} else if (scale[0] === 8) {
  for (let i = 0; i < scale.length; i++) {
    if (scale[i] !== 8 - i) {
      console.log("mixed");
      flag = false;
      break;
    }
  }
  flag && console.log("descending");
} else {
  console.log("mixed");
}