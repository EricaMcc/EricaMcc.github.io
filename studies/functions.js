// FUNCTIONS

// Functions are blocks of reusable code that performs some action. For this reason,
// functions help us keep our code DRY (Don't Repeat Yourself). Functions may or
// may not return a value, but a function is always equal to its return value.

// DECLARING AND CALLING FUNCTIONS

// a function is DEFINED with the keyword function followed by:

// 1. the function name
// 2. any parameters required by the function within parentheses
//   parameters are placeholders for the arguments that will be input later when
//   the function is called
// 3. block of code to run within { } along with the return statement

function functionName (parameter1, parameter2) {
    return parameter1 + parameter2; //returns parameter1 concatenated with parameter 2 they are strings, or the sum of a number if they are numbers
}

// a function is CALLED by referencing the function name and placing any arguments in parentheses

functionName(10, 22); //returns 32;
functionName('cat', 'bus'); //returns 'catbus';

// Functions can take other functions as arguments
// For exmaple,

function add(num1, num2) {
    return num1 + num2;
}

add(add(2, 3), add(4, 6)); // returns 15

/* ANONYMOUS FUNCTIONS & FUNCTION EXPRESSIONS

ANONYMOUS FUNCTIONS are functions that are not given a name and are defined
and executed at the same time. These are usually passed in other functions.

FUNCTION EXPRESSIONS are anonymous functions that are assigned to a variable
or a constant.

FUNCTIONS AND SCOPE

Scope indicates where in our code a variable can be accessed
Three scopes:

1. Global Scope - a variable declared globally can be accessed from anywhere
within our code

2. Function Scope - var when declared within a function can only be accessed
from within that function or from functions nested within that function

3. Block Scope - when let and const are declared within a block of code 
(if statements, functions, loops) they can only be accessed from within those
blocks

CLOSURE

Closure occurs when we access a variable within a function from somewhere
in the parent scope.
This can mean accessing a variable in the global scope (outside of the function
completely), or it can mean accessing a variable from a parent function that it is
nested in. 

NOTE: a child block can access from its parents block/s,
but the reverse is NOT true (a parent cannot access variables declared within 
its children blocks)

Below is an example of closure:
*/

var globalNum = 7;

function subtract(num) {
    console.log(globalNum - num); // closure is occuring here because we are
}                                // accessing globalNum from the global scope

subtract(3); // prints 4