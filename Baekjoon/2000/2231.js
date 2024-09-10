const n = Number(require("fs").readFileSync(0, "utf-8").toString().trim());

let answer = "0";

for (let i = 1; i < n; i++) {
  let decom_sum = i;

  for (const ch of i.toString()) {
    decom_sum += Number(ch);
  }

  if (decom_sum === n) {
    answer = `${i}`;
    break;
  }
}

console.log(answer);
