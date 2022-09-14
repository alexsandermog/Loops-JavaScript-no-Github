const prompt = require ('prompt-sync')();

let idade, totalpessoas50=0 , totalpessoas21=0;

while (idade != -99){
    idade = Number ( prompt ('Insira a idade:  '));
    if (idade < 21 && idade > 0){
        totalpessoas21++
    }
    if (idade > 50){
        totalpessoas50++
    }
}

console.log (`Número de pessoas menores que 21: ${totalpessoas21}`);
console.log (`Número de pessoas maiores que 50: ${totalpessoas50}` );
