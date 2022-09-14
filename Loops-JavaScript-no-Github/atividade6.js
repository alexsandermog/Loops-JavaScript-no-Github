const prompt = require ('prompt-sync')();

let nume, media=0, contr=0, adicao=0;

do {

    nume = Number ( prompt ('Insira um número:  ')); 
    adicao = adicao + nume;
    if (nume %3 === 0){
        contr++
    }

} while (nume !=0 );

   
    media = soma / (contr -1);

 console.log (`A soma dos números multiplos de 3 é: ${adicao}`);
 console.log (`A média dos números multiplos de 3 é: ${media}`);