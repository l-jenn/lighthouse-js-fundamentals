/* We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

> If the number is a multiple of 3, print the string "Loopy" instead of the number.
> If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
> If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.

By print, we are referring to console.log. */


/* 
- first, write the loop and make sure it works 
-  then pick a condition i want to start with, ex. printing "Loopy" instead of multiples of 3 and test <- i am here
- then add in the next exceptions until they all work*/

for (let num = 100; num <= 200; num++) {
  if (num % 3 === 0 && num % 4 === 0) {
    console.log("LoopyLighthouse");
  } else
  console.log(num);
}