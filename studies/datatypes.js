/* DATATYPES

There are 2 main typees of data in javascipt
1. Simple (Primitive)
2. Complex

SIMPLE DATATYPES

Simple datatypes are strings, numbers, booleans, null, undefined, and symbols

1. strings are any combination of characters held within single or double quotes
2. numbers are any numerical value 
3. booeans are true/false values
4. null has a value of null
5. undefined is a variable that has not been assigned a value
6. symbols are values that may be used as keys in objects

Simple datatypes:
1. are IMMUTABLE - their original value cannot be altered
   operations on these datatypes return a new simple value
   they do not hold, collect, or aggregate values
2. COPY BY VALUE - their value is directly copied from one variable to the next
*/

// Below are some examples of primitive datatypes
var string = 'this is a string';
var number = 7;
var boolean = true;

// This is an example of primitive datatypes as immutable
string[0] = 'T';
console.log(string); // prints 'this is a string'

// Unlike an array or object, we cannot directly alter values in a string
// Instead we must assign a new value

string = 'This is a string';
console.log(string); // prints 'This is a string';

/*
COMPLEX DATATYPES

Complex datatypes are arrays, objects, and functions

1. Arrays - hold values at indices (which are zero-indexed)
2. Objects - hold values at keys (which are strings)
3. Functions - provide us with reusable code blocks and aggregate values

Complex datatypes:
1. AGGREGATE OTHER VALUES and are of an INDEFINITE SIZE
   arrays and objects can grow indefinitely unlike simple datatypes
2. COPY BY REFERENCE - when assigned or reference, they are copied by reference
   rather than value (as simple datatypes are)

OBJECTS consist of a body of key/value pairs (or properties) containing information
about a single item

In an object, the key is always a string
However, the value can be of any datatype (even another object)
For example, 
*/

var object = {
    id: 1,
    colors: ['red', 'blue'],
};

// When accessing an object, we can use dot notation or bracket notation

console.log(object.id); // prints 1
console.log(object['colors']); // prints ['red', 'blue']

// We can also use these notations to change the values or add new key value pairs

object.inStock = true;
object.colors = ['yellow', 'black', 'green'];

console.log(object) // prints { id: 1, colors: [ 'yellow', 'black', 'green' ], inStock: true }

// An ARRAY is a collection or values stored at indices

var array = [1, 2, 3];

// Like objects, we can access values within an array with bracket notation

console.log(array[0]); // prints 1

// NOTE: arrays are 0-indexed - they start at 0

// Like object, we can also alter a value in an array with bracket notaiton

array[0] = 2;
console.log(array); // prints [2, 2, 3]

// as well as use bracket notation to add values to the array

array[3] = 4;
console.log(array); // prints [2, 2, 3, 4]

/* 
SIMPLE (PRIMITIVE) VS COMPLEX DATAYPES

A variable can directly store up to 8 bytes of memory.  This means that
SIMPLE DATATYPES (which have a fixed size) can be stored directly within
the variable.  However, because COMPLEX DATATYPES are of an indefinite size, 
they must be stored somewhere else.  So when we assign complex datatypes to a
variable, it actually points to the place in memory they are stored.

COPY BY VALUE VS COPY BY REFERECNCE

When a variable of a SIMPLE DATATYPE is assigned to copy that value to a new
variable, the value of the original variable will remain separate from the value
of the new variable. This means that even if this new variable is altered, the
original variable that it was copied from will still retain its original value.

Because COMPLEX DATATYPES cannot be stored directly in a variable, they are COPY
BY REFERENCE.  This means that when assigned to another variable, it 
copies the reference point to the place in memory that the data is actually stored
(it points to the original variable it was copied from). This means
that if that new variable is altered, it will alter the original variable's 
value as well.

Below are examples of COPY BY VALUE and COPY BY REFERENCE
*/

// COPY BY VALUE
var copyNumber = number;
console.log(number); // prints 7
copyNumber += 1;
console.log(copyNumber); // prints 8
console.log(number); // prints 7

// COPY BY REFERENCE
var copyArray = array;
console.log(array); // prints [2, 2, 3, 4]
copyArray[0] = 1;
console.log(copyArray); // prints [1, 2, 3, 4]
console.log(array); // prints [1, 2, 3, 4]

/* 

Looking at the above examples, you can see an example of copy by value with
a number and an example of copy by referenece with an array. When we look at the
number (which is a primitive datatype), we can see that altering the copy of
original variable did not alter the value of the original variable itself.
This is because when we assigned copyNumber to number, we made a direct copy of
the value of number (which was 7). When we look at the array 
(which is a complex datatype), we can see that altering the copy array altered
not only that arrays values, but also the values in the orinal array that it
was copied from.  This is because when we assigned the copyArray to array's value,
it was actually assigned to the original place in memory that BOTH array's point to.
So altering one would alter the other as well.

*/