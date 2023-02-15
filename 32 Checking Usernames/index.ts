var current_users: string[] = ['Asad','Shakir','Arham','Sabir','Kamil'];
var new_users:string[]=['Baqir','Muslim','Asad','Arham','Bilal'];

new_users.forEach(user=>{
    if(current_users.some(u=>u.toLocaleLowerCase()==user.toLocaleLowerCase())){
        console.log(`'${user}' will need to enter a new username`)
    }else{
        console.log(`'${user}' username is available.`)
    }
})