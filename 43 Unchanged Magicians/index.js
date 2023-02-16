"use strict";
var magicians = ['David Copperfield', 'Doug Henning', 'Lance Burton', 'Ricky Jay', 'Mark Wilson', 'Penn and Teller'];
function show_magician_names(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
function make_mag_great(magicians) {
    return magicians.map(i => 'the Greate ' + i);
}
console.log('Magicians original names:');
show_magician_names(magicians);
console.log('\nMagician names with Greate Added:');
var magicians_copy = make_mag_great(magicians);
show_magician_names(magicians_copy);
