//let invite some guests for dinner
var guests_list=['Sher Ali','Husnain Ali','Saleem Khan','Usman Aziz'];
guests_list.forEach(guest=>{
    console.log(`Hi ${guest}! please come for dinner at my home.`)
})


console.log('\n')
console.log(`${guests_list[0]}! can’t make it to dinner.`)
console.log(`${guests_list[1]}! can’t make it to dinner.`)
console.log('\n')
//let change first two guests
guests_list[0]='Saqlain';
guests_list[1]='Saqib Ali';

console.log('New invited guests')
guests_list.forEach(guest=>{
    console.log(`Hi ${guest}! please come for dinner at my home.`)
})
//We got a bigger table, let's some more people to the guest list.
console.log("\nWe got a bigger table!")
guests_list.unshift("Munee Ahmad");
guests_list.splice(2, 0, "Shamsheer Khan");
guests_list.push("Javed Ali");

guests_list.forEach(guest=>{
    console.log(`Hi ${guest}! please come for dinner at my home.`)
})