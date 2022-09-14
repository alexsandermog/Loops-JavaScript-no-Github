const prompt = require ('prompt-sync')();

let numero, adicao=0


do {
    numero = Number ( prompt ('Digite algum número: ')); 
    adicao = adicao + numero

}
while (numero != 0)
{ 
}
console.log (`Total da soma : ${adicao}`);