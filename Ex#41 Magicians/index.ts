var magicians:string[]=['David Copperfield','Doug Henning','Lance Burton','Ricky Jay','Mark Wilson','Penn and Teller'];
function show_magicians(magicians:string[]){
magicians.forEach(magician=>{
    console.log(`${magician}`)
})
}

console.log('Here is the top listed magicians')
show_magicians(magicians);