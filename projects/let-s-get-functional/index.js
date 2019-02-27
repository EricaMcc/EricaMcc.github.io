// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-ericamcc');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(arr) {
    // create an array of only objects containing gender: 'male'
    const male = _.filter(arr, function(val, i, col) {
        return val.gender === 'male';
    });
    // return the length of that array (number of male customers)
    return male.length;
};

var femaleCount = function(arr) {
    // create an array containing all gender values form objects
    const genders = _.pluck(arr, 'gender');
    // reduce the genders array down to a single number value
    return _.reduce(genders, function(total, gender, index) {
        // if current gender is 'female', total number value will increase by 1
        if (gender === 'female') {
            total++;
        }
        return total;
    }, 0);
    // returns the total number of 'female' found in genders array
};

var oldestCustomer = function(arr) {
    let oldest = 0;
    let oldestCust;
    // for each value in arr
    _.each(arr, function(val, i, col) {
        // check if current value is greater than value of oldest variable
        if (val.age > oldest) {
            // if it is greater, assign it as the new oldest value
            oldest = val.age;
            // additionally, assign the oldestCust variable to the value of name
            // in the current object in arr
            oldestCust = val.name;
        }
    });
    // return the final value of oldestCust
    return oldestCust;
};

var youngestCustomer = function(arr) {
    let youngest = Infinity;
    let youngestCust;
    // for each value in arr
    _.each(arr, function(val, i, col) {
        // check if current value is greater than value of oldest variable
        if (val.age < youngest) {
            // if it is greater, assign it as the new oldest value
            youngest = val.age;
            // additionally, assign the oldestCust variable to the value of name
            // in the current object in the array
            youngestCust = val.name;
        }
    });
    // return the final value of oldestCust
    return youngestCust;
};

var averageBalance = function(arr) {
    // create an array of numbers containing the value of balances for each object in arr
    const balances = _.map(arr, function(val, i, col) {
        // slice the $ from each string value, then remove all commas and parse
        // to a float number value
        return parseFloat(val.balance.slice(1).split(',').join(''));
    });
    // reduce the array of valances to a single numberical value
    return _.reduce(balances, function(sum, amount, index) {
        // for each iteration, add the next amount to the total sum of balances
        sum += amount;
        // when we reach the last item in balances array
        if (index === balances.length - 1) {
            // return the total sum divided by the total number of balances
            return sum / balances.length;
        } else {
            return sum;
        }
    });
};

var firstLetterCount = function(arr, letter) {
    let count = 0;
    // for each value in arr
    _.each(arr, function(val, i, col) {
        let firstLetter = val.name[0].toLowerCase();
        // if the first letter of the current value is equal to the letter parameter
        if (firstLetter === letter.toLowerCase()) {
            // add 1 to count
            count++;
        }
    });
    // return the final count (number of first letters that match letter)
    return count;
};

var friendFirstLetterCount = function(arr, name, letter) {
    // find the customer object containing <name> at name key
    const customer = _.filter(arr, function(val, i, col) {
        return val.name === name;
    });
    // create an array containing the names of all the customer's friends
    const friendsNames = _.pluck(customer[0].friends, 'name');
    // return number of friends that name's first letter matched letter
    return _.reduce(friendsNames, function(count, friend, index) {
        // check if the first letter of name in each object is equal to letter
        if (friend.toLowerCase()[0] === letter.toLowerCase()) {
            // if it is, add to count
            count++;
        }
        return count;
    }, 0);
};

// output an array of the names of all customers in <arr> who are friends with <name>
// if no <name> is given, output names of all customers who are friends with each other
var friendsCount = function(arr, name) {
    // create an array containing all customers that had <name> in their
    // friends list
    let friends = _.filter(arr, function(val, i, col) {
        let currentFriends = _.pluck(val.friends, 'name');
        return _.contains(currentFriends, name);
    });
    // return the names of all customers from friends array
    return _.pluck(friends, 'name');
};

// Find the three most common tags among all customers' associated tags
var topThreeTags = function(arr) {
    // create an array of all tags
    const tags = _.reduce(_.pluck(arr, 'tags'), function(array, subarray, index) {
        return array.concat(subarray);
    }, []);
    // create an object containing a tally of all tags
    const tally = _.reduce(tags, function(tally, tag, index) {
        if (!tally[tag]) {
            tally[tag] = 1;
        } else {
            tally[tag]++;
        }
        return tally;
    }, {});
    // create an array for the top three tags
    let topThree = [];
    // loop through all values in tally to find the top three tags
    for (let key in tally) {
        // if topThree array has less than three tags, add the current tag
        if (topThree.length < 3) {
            topThree.push(key);
        // if topThree array already has three tags
        } else {
            // loop through the topThree array
            for (let i = 0; i < topThree.length; i++) {
                // if the current tag in topThree has a value in tally
                // that is less than the value of the current property in tally
                if (tally[topThree[i]] < tally[key]) {
                    // replace the tag in the array with the current tag
                    topThree.splice(i, 1, key);
                    break;
                }
            }
        }
    }
    // return the top three tags
    return topThree;
};

var genderCount = function(arr) {
    // create an array containing all the values at key gender
    const genders = _.pluck(arr, 'gender');
    // return a tally of genders in an object
    return _.reduce(genders, function(count, gender, index) {
        // if gender property does not exist yet, create it and set it to 1
        if (!count[gender]) {
            count[gender] = 1;
        // if gender property already exists, add 1 to the value
        } else {
            count[gender]++;
        }
        // return the object containing the tally of genders
        return count;
    }, {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
