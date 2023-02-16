var personName="Ashraf"

console.log(personName.toLowerCase()); //Shows Perosn Name in Lower Case
console.log(personName.toUpperCase()); //Shows Perosn Name in Upper Case

//Creates this function to show person's name in Title Case
const toTitleCase = (str: string) => {
    return str.toLowerCase().split(' ').map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  }

console.log(toTitleCase(personName)); //Shows Perosn Name in Title Case