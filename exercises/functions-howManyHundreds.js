/*
without using Math function:
  (num - (num % 100)) / 100;

could also use Math.floor to round down, or use Math.trunc to shave off any decimals */

function howManyHundreds(num) {
  return Math.trunc(num / 100);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);