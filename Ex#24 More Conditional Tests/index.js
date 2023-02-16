"use strict";
//Tests for equality and inequality with strings
var p_name = 'sahir khan';
let result = p_name != 'laiq akhtar';
console.log(result);
var user_name = 'Pasha Khan';
let result2 = user_name.toLowerCase() == 'pasha khan';
console.log(result2);
//Tests using the lower case function
console.log('Eric'.toLocaleLowerCase == 'Eric'.toUpperCase);
console.log('Eric'.toLowerCase() == 'eric'.toLowerCase());
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 5;
var num2 = 4;
console.log(num1 == num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 != num2);
//Tests using "and" and "or" operators
console.log(num1 <= num2 || num1 != num2);
console.log(num1 <= num2 && num1 != num2);
//Test whether an item is in a array
const arr = ['bobby', 'hadz', 'com'];
console.log(arr.includes('bobby') ? 'The value is contained in array' : 'The value is NOT contained in array');
//Test whether an item is not in array
console.log(arr.includes('dobby') ? 'The value is contained in array' : 'The value is NOT contained in array');
