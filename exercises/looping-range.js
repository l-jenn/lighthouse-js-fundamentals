/* Define a function called range

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
For example:

code	output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]

The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/

function range(start, end, step) {
  let rangeContainer = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      rangeContainer.push(i);
    }
    return rangeContainer;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, -15, 3));