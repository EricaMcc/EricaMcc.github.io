/* OPERATORS:

Operators perform some action on one or more operands. An operand is the item
on which the action is being performed.

1. Unary operators require a single operand, before or after the operator
2. Binary operators require two operands, one before and one after the operator
3. The ternary operator (there is only one) requires three operands

There are several different types of operators that behave differently:

1. Arithmetic Operators - operators which take two numbers and produce another number
2. Assignment Operators - operators that assigns a value to the left operand from the right operand
3. Comparison Operators - operators that two operands and return a boolean
4. Logical Operators - allow us to check for multiple boolean conditions

*/

// ARITHMETIC OPERATORS:

// + is used for addition
var num = 2 + 7;
console.log(num); // logs 9

// NOTE: When used with strings, + contatenates two strings (adds them together)
var color = 'yellow';
console.log(color); // logs 'yellow'
var colors = color + ' and green';
console.log(colors); // logs 'yellow and green'

// - is used for subtraction
num = 7 - 2;
console.log(num); // logs 5

// * is used for multiplication
num = 2 * 7;
console.log(num); // logs 14

// / is used for division
num = 14 / 2;
console.log(num); // logs 7

// % is used to find the remainder of two numbers divided
num = 14 / 7;
console.log(num); // logs 0

// NOTE: there are also several unary arithmetic operators, ++ and --
// ++ adds 1 its operand (increments) while -- subtracts 1 (decrements)
num = 1;
num++;
console.log(num); // logs 2
num--;
console.log(num); // logs 1

// ASSIGNMENT OPERATORS:

// = assigns a value
color = 'red'; // assigns the value of 'red' to the variable color
console.log(color); // logs 'red'

// NOTE: there are several shorthand assignment operators that perform arithmetic and assign at the same time

// += operator adds two operands and assigns them (if they are numbers)
num = 1;
num += 9;
console.log(num); // logs 10

// NOTE: if the operands are not numbers, it concats and then assigns
colors = color; //now, 'red' has been assigned to the variable colors
colors += ' and blue'; // equivalent to colors = colors + ' and blue'
console.log(color); // logs 'red and blue'

// -= subtracts one operand from another and assigns it
num = 10;
num -= 9;
console.log(num); // logs 1

// *= multiplies two operand and then assigns it
num = 2;
num *= 9;
console.log(num); // logs 18

// /= divides one operands by another and then assigns it
num = 10;
num /= 5;
console.log(num); // logs 2

// %= finds the remainder of two operands and then assigns it
num = 10;
num %= 3;
console.log(num); // logs 1

// **= is the exponentiation assignment operator
// it raises the value of the first operand to the power of the second operand and assigns it
num = 5;
num **= 2;
console.log(num); // logs 25

// COMPARISON OPERATORS:

// == checks if two values are equal, returns true if they are, false if they aren't
3 == 3; // returns true
3 == 2; // returns false

// != checks if two values are NOT equal, returns true if they are not, false if they are
3 != 3; // returns false
3 != 2; // returns true

// NOTE: == and != are TYPE CONVERTING OPERATORS
// This means that they will automatically convert two values that aren't of the
// same type to a single type.

3 == '3'; // returns true

// === checks if two values are strictly equal and returns a boolean
3 === 3; // returns true
3 === 2; // returns false

// !== checks if two values are strictly NOT equal and returns a boolean
3 !== 3; // returns false
3 !== 2; // returns true

// NOTE: === and !== are STRICK OPERATORS
// This means that they do NOT convert type

3 == '3'; // returns false

// > checks if the left operand is greater than the right operand and returns a boolean
3 > 2; // returns true

// < checks if the left operand is less than the right operand and returns a boolean
2 < 3; // returns true

// >= checks if the left operand is greater than or equal to the right operand and returns a boolean
3 >= 3; // returns true

// <= checks if the left operand is less than or equal to the right operand and returns a boolean
3 <= 3; // returns true

// LOGICAL OPERATORS:

// AND operator (&&) returns true if BOTH conditions evaluate to true
if (3 > 2 && 4 > 2) {
    console.log(true);
} else {console.log(false);} // returns true

if (3 > 2 && 1 > 2) {
    console.log(true);
} else {console.log(false);} // returns false


// OR operator (||) returns true if ONE condition evaluates to true
if (3 > 2 || 1 > 2) {
    console.log(true);
} else {console.log(false);} // returns true

if (0 > 2 || 1 > 2) {
    console.log(true);
} else {console.log(false);} // returns false

// BANG/NOT operator (!) returns true if condition evaluates to false
if (!3 > 2) {
    console.log(true);
} else {console.log(false);} // returns false

if (!1 > 2) {
    console.log(true);
} else {console.log(false);} // returns true

// DOUBLE BANG OPERATOR (!!) coerces a value to a boolean (truthy or falsey)

console.log(!!1); // logs true
console.log(!!null); // logs false

// TERNARY OPERATOR

// The conditional ternary operator is the only operator which takes three operands

(3 > 2)       ? '3 is greater than 2' : 'this will never return';
// operand1          operand2                  operand3

// UNARY OPERATORS

// In addition to ++ and --, TYPEOF and DELETE are also unary operators

// TYPEOF returns the datatype of the operand
var string = 'yayyy I\'m a string';
typeof string; // returns 'string'

// the DELETE operator deletes a property from an object

var obj = {name: 'Erica', favFood: 'all the food'};
delete obj.favFood;
console.log(obj); //prints Object {name: "Erica"}