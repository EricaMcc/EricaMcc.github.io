// CONTROL FLOW

// Control Flow refers to deciding when/if statements will execute in a program
// A statement is any code that produces an action (they usually end with a semicolon)
// We use CONDITIONAL STATEMENTS to control the flow of applications

// CONDITIONAL STATEMENTS

// Conditional statements take some condition/conditions and coerce it to a boolean
// We then execute a block of code based on what the condition coerces to
// To do this, we use IF/ELSE statements

// The STRUCTURE of an if else statement consists of the if keyword
// followed by a conditional statement in parentheses that will evaluate to a boolean
// followed by a block of code within curly braces that will run if
// the conditional statement evaluates to true

// ELSE can be placed at the end of an if statement for a block of code to be run
// if none of the if statements evaluate to true

function greaterThan(num1, num2) {

    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else {
        console.log(`${num1} is not greater than ${num2}`);
    }

}

greaterThan(100, 5); // logs '100 is greater than 5'

// Because the condition evaluated to true in the if statement, the first block executed
// giving us '100 is greater than 5'
// However...

greaterThan(5, 100); // logs '5 is not greater than 100'

// Because the condition evaluated to false, the first block of code was skipped over
// resulting in the second block of code being executed
// giving us '5 is not greater than 100'

// CHAINING IF/ELSE STATEMENTS

// If/else statements can be chained together to execute different code blocks
// depending on different conditions

function greaterThan(num1, num2) {

    if (num1 > num2) {
        console.log(`${num1} is greater than ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} is less than ${num2}`);
    } else {
        console.log(`${num1} is equal to ${num2}`);
    }

}

greaterThan(100, 5); // logs '100 is greater than 5'
greaterThan(100, 100); // logs '100 is equal to 100'

// This code will check if num1 is greater than num2 and execute a code block if true
// If it is not true, it will check if num1 is less than num2 and execute a code block if true
// and if neither condition is true, the else code block will execute

// NOTE: If statements run top to bottom
// Once a condition evaluates to true, the rest of the code beneath is IGNORED


function greaterThanHundred(num) {

    if (num > 10) {
        return `${num} is greater than 10`;
    } else if (num > 100) {
        return `${num} is greater than 100`;
    } else {
        return `${num} is less than 10`;
    }

}

greaterThanHundred(30); // returns '30 is greater than 10'

greaterThanHundred(450); // returns '450 is greater than 10'

// ORDER IS IMPORTANT
// We probably wanted the number 450 to return '450 is greater than 100'
// but we never reached that point in the if statement block because once
// the first statement evaluated to true, that code block was returned and
// everything else was ignored

// SWITCH STATEMENTS

// switch statement work similarly to if/else statements
// they are useful for situations in which you have a lot of conditions
// make for cleaner code in certain situations

// default functions in the same way as an else statement

var city = 'Baton Rouge';

switch (city) {
    case 'New Orleans':
        console.log('You are in New Orleans');
        break;
    case 'Lafayette':
        console.log('You are in Lafayette');
        break;
    case 'Baton Rouge':
        console.log('You are in Baton Rouge');
        break;
    default:
        console.log('Your location has not been found');
        break;
}

// prints 'Baton Rouge'

// NOTE: do not forget to put a break after each case;
// forgetting to do so will cause the next block of code to execute

/* TRUTHY AND FALSEY

values that evaluate to false (falsey)
1. false
2. NaN
3. null
4. undefined
5. 0
6. '' (empty string)

all other values/types evaluate to true (truthy)

*/