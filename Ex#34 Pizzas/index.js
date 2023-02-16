"use strict";
const fav_pizzas = ['Chicken Grilled Pizza', 'Smoky Pizza', 'Mashroom Pizza'];
fav_pizzas.forEach(pizza => {
    console.log(pizza);
});
console.log('\n');
fav_pizzas.forEach(pizza => {
    console.log(`I like ${pizza}.`);
});
for (let i = 0; i < 3; i++)
    console.log('______________________________________');
console.log('I really love pizza!');
