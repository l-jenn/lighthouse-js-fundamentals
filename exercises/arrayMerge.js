/* Define a function called merge

The function should, when given two sorted arrays containing numbers, returns a sorted array of the numbers from both lists.

For example:

code	                                output
merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]); 	[ 1, 2, 3, 4, 4, 5, 6 ]
merge([ 4 ], [ 2, 5, 8 ]);           	[ 2, 4, 5, 8 ]
merge([ 1, 2, 6 ], []);              	[ 1, 2, 6 ] */

function merge(arr1, arr2) {
  let sortedArr = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr[k] = arr1[i];
      i++;
    } else {
      sortedArr[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < arr1.length) {
    sortedArr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    sortedArr[k] = arr2[j];
    j++;
    k++;
  }

  return sortedArr;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);