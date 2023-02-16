"use strict";
//let invite some guests for dinner
let guests = ['Sher Ali', 'Husnain Ali', 'Saleem Khan', 'Usman Aziz'];
guests.forEach(guest => {
    console.log(`Hi ${guest}! please come for dinner at my home.`);
});
console.log('\n');
console.log(`${guests[0]}! can’t make it to dinner.`);
console.log(`${guests[1]}! can’t make it to dinner.`);
console.log('\n');
//let change first two guests
guests[0] = 'Saqlain';
guests[1] = 'Saqib Ali';
console.log('New invited guests');
guests.forEach(guest => {
    console.log(`Hi ${guest}! please come for dinner at my home.`);
});
