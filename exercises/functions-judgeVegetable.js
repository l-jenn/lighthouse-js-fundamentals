/* 
Challenge
Complete the logic in the function judgeVegetable.

For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

If we called the function with the following arguments. */

// if metric is valid
// initialize winner var
// loop through objects in array to find highest ranking
// compare redness of [0] to redness of [1]
// store winner in winner variable
// compare redness of winner to next one
// return winner

function judgeVegetable(vegetables, metric) {
  if (vegetables[0][metric]) {
    let winner = 0;
    for (let i = 0; i < vegetables.length; i++) {
      if (vegetables[i][metric] > vegetables[winner][metric]) {
        winner = i;
      }
    }
    return vegetables[winner].submitter;
  } else {
    return "Not a valid metric."
  }
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  },
  {
    submitter: 'Panini Press',
    redness: 15,
    plumpness: 27
  }
]

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric))