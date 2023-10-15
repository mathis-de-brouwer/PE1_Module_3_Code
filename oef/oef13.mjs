// Begin van boilerplate dat je even mag vergeten
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van boilerplate dat je even mag vergeten


let getal;

for(let som = 0; som <= 100; som += getal){
    console.log(som);
    getal = parseFloat(await userInput.question('Geef een getal in: '));
}

process.exit();

/*
while(som <= 100){
   getal = parseFloat(await userInput.question('Geef een getal in: '));
   som += getal;
}
*/

/*
let getal;
let som = 0;

do{
    getal = parseFloat(await userInput.question('Geef een getal in: '));
    som += getal;
    console.log(som)
}while(som <= 100)
*/