"use strict";
var magicians = ['David Copperfield', 'Doug Henning', 'Lance Burton', 'Ricky Jay', 'Mark Wilson', 'Penn and Teller'];
function show_modified_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(`${magician}`);
    });
}
function make_great() {
    magicians = magicians.map(i => 'the Greate ' + i);
    // var  great_magicians:string[]=[];
    // magicians.forEach(magician=>{
    //     let name=magicians.pop()
    //     let great_magician=magician+' the Greate'        
    //     great_magicians.push(great_magician)
    // })
    // great_magicians.forEach(great_magician=>{
    //     magicians.push(great_magician)
    // })
}
console.log('Here is the top listed magicians');
show_modified_magicians(magicians);
console.log('\nMaking magicians Greate');
make_great();
show_modified_magicians(magicians);
