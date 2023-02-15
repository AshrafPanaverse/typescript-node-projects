"use strict";
var alien_color = 'green';
//version1
console.log('Version-1:');
if (alien_color == 'green') {
    console.log('The player just earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('The player just earned 10 points');
}
else if (alien_color == 'red') {
    console.log('The player just earned 15 points');
}
else {
    //do nothing
}
///version2
console.log('\nVersion-2:');
alien_color = 'yellow';
if (alien_color == 'green') {
    console.log('The player just earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('The player just earned 10 points');
}
else if (alien_color == 'red') {
    console.log('The player just earned 15 points');
}
else {
    //do nothing
}
///version3
console.log('\nVersion-3:');
alien_color = 'red';
if (alien_color == 'green') {
    console.log('The player just earned 5 points');
}
else if (alien_color == 'yellow') {
    console.log('The player just earned 10 points');
}
else if (alien_color == 'red') {
    console.log('The player just earned 15 points');
}
else {
    //do nothing
}
