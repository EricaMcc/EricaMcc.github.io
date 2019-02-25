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
    const male = _.filter(arr, function(val, i, col) {
        return val.gender === 'male';
    });
    return male.length;
};

var femaleCount = function(arr) {
    const genders = _.pluck(arr, 'gender');
    return _.reduce(genders, function(total, gender, index) {
        if (gender === 'female') {
            total++;
        }
        return total;
    }, 0);
};

var oldestCustomer = function(arr) {
    let oldest = 0;
    let oldestCust;
    _.each(arr, function(val, i, col) {
        if (val.age > oldest) {
            oldest = val.age;
            oldestCust = val.name;
        }
    });
    return oldestCust;
};

var youngestCustomer = function(arr) {
    let youngest = 1000;
    let youngestCust;
    _.each(arr, function(val, i, col) {
        if (val.age < youngest) {
            youngest = val.age;
            youngestCust = val.name;
        }
    });
    return youngestCust;
};

var averageBalance = function(arr) {
    const balances = _.map(arr, function(val, i, col) {
        return parseInt(val, 1);
    });
    return _.reduce(balances, function(sum, amount, index) {
        sum += amount;
        if (index === balances.length-1) {
            return sum / balances.length;
        } else { 
            return sum;
        }
    });
};

var firstLetterCount = function(arr, letter) {
    let count = 0;
    _.each(arr, function(val, i, col) {
        let firstLetter = val.name[0].toLowerCase();
        if (firstLetter === letter.toLowerCase()) {
            count++;
        }
    });
    return count;
};

var friendFirstLetterCount = function(arr, customer, letter) {
    // find the object containing customer at name key
    let friendsNames = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === customer) {
            // pluck the friends' names from that object at friends
           return _.pluck(arr[i].friends, 'name'); 
        } 
    }
    return friendsNames;
    // check friends names that match first letter
    // let matches = _.filter(friendsNames, function(val, i, col) {
    //     return val[0].toLowerCase() === letter.toLowerCase;
    // });
    // // return the number of names that match
    // return matches.length;
};

var friendsCount = function(arr, name) {
    return _.pluck(_.filter(arr, function(val, i, col) {
        return _.contains(val.friends, name);
    }), 'name');
};

var topThreeTags;

var genderCount = function(arr) {
    _.reduce(arr, function(count, gender, index) {
        if (!count[gender]) {
            count[gender] = 1;
        } else {
            count[gender]++;
        }
        return count;
    }, { });
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
