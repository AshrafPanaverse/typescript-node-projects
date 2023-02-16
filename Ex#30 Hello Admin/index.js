"use strict";
var usernames = ['John', 'Asher', 'Babar', 'Bilal', 'admin'];
usernames.forEach(user => {
    if (user == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
});
