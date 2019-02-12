// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {id: id,
            nameFirst: nameFirst,
            nameLast: nameLast
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            contacts.push(contact);
        },
        findContact: function(fullName) {
            for (let i = 0; i < contacts.length; i++) {
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
                }
            }
            return undefined;
        },
        removeContact: function(contact) {
            for (let i = 0; i < contacts.length; i++) {
                if (contacts[i].id === contact.id) {
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            var string = '';
            for (let i = 0; i < contacts.length - 1; i++) {
                string += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
            }
            return string += contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast;
        }
    }
}
//create a variable to hold a string value
//loop through contacts array so we can access each object (except last object)
//access the first and last names of current object iteration
//concat to string variable with a line break
//exit loop
//return string along with final object from contacts array


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
