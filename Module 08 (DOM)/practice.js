const readline = require("readline-sync");

function calculateDifference(a, b) {
    return a - b;
  }
let a = Number(readline.question("First number: "));
let b = Number(readline.question("Second number: "));

console.log("The difference is: "+calculateDifference(a, b));
