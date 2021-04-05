/* Challenge
Complete the logic in the function carPassing.

The function, carPassing(cars, speed), takes in an array of car objects, and the speed of a car as it passes the sensor.

This function should create a new object with a property called speed, and another property called time and add it to the cars array. We can retrieve the current time, for setting the time property, by using the Date.now() function, which is built into JavaScript!

Our function should return an array that includes all of the elements in cars as well as our new element.

We may need to use JavaScript's handy push() method to add our new object to the cars array. Take a look at this previous exercise for a refresher. */

const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

function carPassing(cars, speed) {
  let car = {
    time: Date.now(),
    speed: speed
  }
  cars.push(car);
  return cars;
}

const speed = 38;

console.log(carPassing(cars, speed))