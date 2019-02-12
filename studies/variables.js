/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.

    NOTE: Variable names can consist only of letters (a-z), numbers (0-9), dollar sign symbols ($), and underscores (_).
          Variable names cannot contain any whitespace characters (tabs or spaces)
          Numbers cannot begin the name of any variable
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. DECLARATION //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. INITIALIZATION or ASSIGNMENT //
myName = 'john';
console.log(myName); // prints => john

// 3. RE-ASSIGNMENT //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: we can redeclare and reassign anything to var
var myVariable = 1;
var myVariable = true;
console.log(myVariable);  // pints => true
myVariable = "someString";
console.log(myVariable);  // prints => someString

//NOTE: var is FUNCTION SCOPED - it makes its own scope that cannot be accessed
// from outside of the function when var is declared within a function

// LET AND CONST

// let and const are ES6 variables
// Unlike var, both let and const are BLOCK SCOPED, not function scoped
// This means that they have their own scope when created within functions,
// if/else statements, and loops

// let can be reassigned but NOT redeclared

let dogBreed = 'corgie';
dogBreed = 'boxer';
console.log(dogBreed);
// this code block prints => boxer

/*
let num = 1;
let num = 2;
console.log(num);

^ this code will throw an error; let cannot be redeclared

const can be neither reassigned nor redeclared BUT 
complex objects assigned to constants can be modified (arrays, objects, etc.)

const dog = 'corgie';
dog = 'boxer';
console.log(dog);

^ throws error SyntaxError: Assignment to constant variable: dog
const cannot be reassigned

const num = 1;
const num = 2;
console.log(dog);

^ throws error SyntaxError: Duplicate declaration "num"
const cannot be redeclared
*/

// NOTES ON USING LET AND CONST:
// const is used when a variable should not be reassigned
// let is used when a variable is expected to be modified in the future
// generally, good practice is to use const as much as possible, and let in the case of loops and reassignment

// 4. GLOBAL VS. LOCAL SCOPE

// Global variables are those declared outside of a block
// Local variables are those declared inside of a block (or for var, inside
// a function)
var age = 29;

function doSomething() {
    var name = 'Erica';
    console.log(age);  // will print 29
    console.log(name);  // will print 'Erica'
}

console.log(age);  // will print 29
// console.log(name); => will print undefined 

// In this example, age is globally scoped while name is locally scoped 
// name can only be accessed from within the function it has been declared
// so when we attempt to access it outside of the function, we get undefined

/* HOISTING

when we run the application, variables and functions are hoisted to the top
this means that it doens't matter when or where they are declared or defined
they will still be available to be accessed regardless of they order
in which they are written

global variables are hoisted to the top of the global scope and local variables
are hoisted to the top of their local scope

NOTE: let and const are NOT HOISTED

However, for var only the declaration is hoisted, not the initialization
this means that if you try to access the variable before initializing it,
you will avoid a reference error but you will still get undefined       */

console.log(myVar);  // logs undefined
var myVar = 'string';