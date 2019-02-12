// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    //loop through the numbers 1 to 100
    for (var i = 1; i < 101; i++) {
        //use remainder operator to check if number is divisible by 3 or 5
        //if # is divisible by both 3 & 5, print fizzbuzz
        if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');
        //if # is divisible only by 5, print buzz
        } else if (i % 5 === 0) {
          console.log('Buzz');
        //if # is divisible only by 3, print fizz
        } else if (i % 3 === 0) {
          console.log('Fizz');
        //if # is not divisible by 3 or 5, print the number
        } else {
          console.log(i);
        }
    }

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}