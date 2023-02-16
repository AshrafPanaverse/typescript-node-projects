"use strict";
function makeCar(manufacturer, model, options) {
    const car = {
        manufacturer: manufacturer.charAt(0).toUpperCase() + manufacturer.slice(1),
        model: model.charAt(0).toUpperCase() + model.slice(1)
    };
    for (const [option, value] of Object.entries(options)) {
        car[option] = value;
    }
    return car;
}
const myOutback = makeCar('subaru', 'outback', { color: 'blue', tow_package: true });
console.log(myOutback);
const myAccord = makeCar('honda', 'accord', { year: 1991, color: 'white', headlights: 'popup' });
console.log(myAccord);
