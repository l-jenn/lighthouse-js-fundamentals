const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let coordinates = [];
  let x = 0;
  let y = 0;

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

  coordinates.push(x);
  coordinates.push(y);

  return coordinates;
}

console.log(finalPosition(moves));