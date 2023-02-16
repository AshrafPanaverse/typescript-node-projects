"use strict";
function make_a_shirt(size = 'large', message = 'I love javascript') {
    console.log(`I wear ${size} shirts.`);
    console.log(`I will say, ${message}`);
}
make_a_shirt(); //makes large shirt
make_a_shirt('medium'); // makes medium shirt
make_a_shirt('x-large', 'I am a Boss'); // makes small shirt with custom message
