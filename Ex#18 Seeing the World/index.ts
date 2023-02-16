var places=["K-2", "Khunjrab","Deosai","Shangrila","Sarfaranga"];

console.log("Places in orignal order");
console.log(places);


console.log("\nPlaces in Alphabetical order");
console.log([...places].sort());

console.log("\nPlaces in still orignal order");
console.log(places);

console.log("\nPlaces in reverse alphabetical order");
console.log([...places].sort().reverse());

console.log("\nPlaces in still orignal order");
console.log(places);

console.log("\nPlaces in riversed order");
console.log(places.reverse());

console.log("\nPlaces in orignal order");
console.log(places.reverse());


console.log("\nPlaces Changed in Alphabetical order");
console.log(places.sort());

console.log("\nPlaces changed to reverse alphabetical order");
console.log(places.sort().reverse());