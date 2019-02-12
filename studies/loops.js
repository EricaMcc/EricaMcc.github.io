// LOOPS:

// Loops allow us to run a block of code repeatedly
// They are useful when dealing with arrays and objects
// There are several types of loops


// FOR LOOP


    for (var i = 1; i < 11; i++) {
        console.log(i); //logs the numbers 1 - 10
    }
    
// for loops take in 3 values in parentheses

// 1. INITIALIZATION or starting condition

    var i = 1;

// 2. STOPping condition which evaluates to true/false
//   if false, loop stops

    i < 11;

// 3. INCREMENT

    i++;

// WHILE LOOP

var i = 1;
while (i < 11) {
    console.log(i); //logs the numbers 1 - 10
    i++
}

// In a while loop, the variable for the starting condition is declared outside of the loop
// The parentheses contain only the stopping condition
// The increment must be placed within the code block

// DO WHILE LOOP

var i = 1;
do {
    i++;
    console.log(i); //logs the numbers 1 - 10
} while(i < 11);

// Like a while loop, the variable or starting condition is declared outside of the while loop
// The increment must be placed within the code block
// NOTE: a while loop always runs at least once

// 4. FOR IN LOOP

var object = {1 : 'red'};

for (var key in object) {
    console.log(object[key]); //logs 'red'
}

// A for in loop allows us to iterate over objects to retrieve keys and/or values
// Object refers to the name of whichever object you would like to loop6 through
// NOTE: you should always use bracket notation to access key because it is a variable

// BREAK AND CONTINUE

// loops may contain a break or continue statement contained wihin an if statement

// CONTINUE terminates the current iteration of a loop, beginning the next iteration

var i = 0;

while (i < 11) {
    i++;
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);//logs numbers 1, 2, 4, 5, 7, 8, 10 (skips numbers 3, 6, 9)
}

// unlike continue, BREAK exits out of a loop entirely without beginning the next iteration

var arrayOfNumbers = [1, 2, 30, 52, 76, 100];

var i = 0;
while (i < arrayOfNumbers.length) {
    if (arrayOfNumbers[i] === 52) {
        break;
    }
    console.log(arrayOfNumbers[i]);//logs values of given array containing numbers
                                   //until it finds the number 52, at which point it breaks out of the array
    i++;
}

// AVOIDING INFINITE LOOPS

// if an infinite loop is created, the program will crash
// we must be careful never to create an infinite loop

var i = 5;

while (i < 5) {
    i--; 
    console.log(i);
}

// !!! this code will cause an infinite loop; i < 5 will always be true