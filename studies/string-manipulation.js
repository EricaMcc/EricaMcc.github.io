// STRING MANIPULATION

// A string is any combination of characters contained within single or double quotes.
// Strings are a type of primitive (simple) data. As such, strings are immutable,
// which means that they cannot be altered, and they are of a definite size.
// There are many useful things that we can do with strings, which I will go over
// below.

// ACCESSING STRINGS

// Strings can be accessed by referencing the variable they are contained within.
// For example,

var string = 'I am a string';
console.log(string); // logs 'I am a string'

// We can also access individual characters within a string by using bracket notation
// NOTE: Like arrays, they are zero-indexed (they begin with 0 instead of 1)

console.log(string[0]); // logs 'I'

// We can find the number of characters within a string using the .length property

console.log(string.length); // logs 13

// We can use the .length property to access the last character in a string
// Because strings are zero-indexed, we must subtract one from the string length to find the last character

console.log(string[string.length - 1]); // logs 'g'

// CONCATENATING STRINGS

// We can concatenate strings (add strings together to make a single string) using the + operator
// For example,

string += ' and I am a string too!';
console.log(string); // logs 'I am a string and I am a string too!'

// MANIPULATING STRINGS

// Unlike arrays and objects, strings are immutable (they cannot be altered)
// They can be reassigned, but not altered.
// This means that you cannot access a single character at an index to change
// For example,

var name = 'Erica';
name = 'Jen';
console.log(name); // logs 'Jen'
name[0] = 'K';
console.log(name); // logs 'Jen'

/* STRING METHODS

These are some useful methods available for use with strings. We can use these
built-in functions to manipulate strings String methods are pure, which means 
that they don't alter the original string and we don't have to worry about
them producing any side effects.

.toLowerCase() and .toUpperCase() change the case of every character within
the string to lower case or upper case respectively
*/

var greeting = 'Hello, world';
console.log(greeting.toUpperCase()); // logs 'HELLO, WORLD'
console.log(greeting.toLowerCase()); // logs 'hello, world'

// .charAt() returns a character in a string at a specific index

console.log(greeting.charAt(0)); // logs 'H'

// .startsWith() and .endsWith check if the string starts or ends with the
// specified character/s and returns a boolean
// the first argument it takes in is the character/s to check for
// a second argument can be entered to specify where in the string to check

console.log(greeting.startsWith('Hello')); // logs true
console.log(greeting.startsWith('Hello', 3)); // logs false
console.log(greeting.endsWith('world'));  // logs true
console.log(greeting.endsWith('world', 12)); // logs true

// NOTE: these methods are case sensitive

console.log(greeting.startsWith('hello')); // logs false

// NOTE: for some reason startsWith and endsWith aren't 0-indexed

// .includes() checks if the string contains the specified character/s

console.log(greeting.includes('world')); // logs true
console.log(greeting.includes('!')); // logs false

// .slice() copies a specified section of a string
// may take in two arguments, the index to start at and index to end at

console.log(greeting.slice(7)); // logs 'world'
console.log(greeting.slice(0, 5)); // logs 'Hello'

// NOTE: the character specified to end at is not included

// .split() splits a string into an array of substrings at a specified character/s

console.log(greeting.split(' ')); // logs ['Hello,', 'world']

// .replace() replaces a value in a string with another value

console.log(greeting.replace('world', 'hello')); // logs 'Hello, hello'
// NOTE: can be used with regular expressions

// .repeat() returns string with a specified number of copies

console.log(greeting.repeat(2)); // logs 'Hello, worldHello, world'