const fs = require("fs");
const grade = fs.readFileSync(0, "utf-8").toString();

let score = 0.0;

if (grade[0] === "A") {
  score += 4.0;
} else if (grade[0] === "B") {
  score += 3.0;
} else if (grade[0] === "C") {
  score += 2.0;
} else if (grade[0] === "D") {
  score += 1.0;
}

if (grade[1] === "+") {
  score += 0.3;
} else if (grade[1] === "-") {
  score -= 0.3;
}

console.log(score.toFixed(1));
