/* If we called the function with the following arguments.

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);
The finalPosition function should return the array:

[-1, 4] */

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let position = [0, 0];

  for (let move of moves) {
    if (move === 'north') {
      position[1] ++;
    } else if (move === 'south') {
      position[1] --;
    } else if (move === 'east') {
      position[0] ++;
    } else if (move === 'west') {
      position[0] --;
    }
  }

  return position;
}

console.log(finalPosition(moves));