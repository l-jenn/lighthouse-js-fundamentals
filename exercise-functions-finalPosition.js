/* If we called the function with the following arguments.

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
The finalPosition function should return the array:

[-1, 4] */

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let [x, y] = [0, 0];

  for (let move of moves) {
    if (move === 'north') {
      y += 1;
    } else if (move === 'south') {
      y -= 1;
    } else if (move === 'east') {
      x += 1;
    } else if (move === 'west') {
      x -= 1;
    }
  }

  return [x, y];
}

console.log(finalPosition(moves));