import rl from 'readline-sync';

//Declaração de função
function caixaAlta (string){
    return string.toUpperCase;
}
let nome = rl.question('Informe seu nome:')
console.log(`EU SOU A ${caixaAlta(nome)}`)

//Expressão de uma função
const upperCase = function(string){return string.toUpperCase}



//Função seta
const maiusculas = (string) => string.toUpperCase();
console.log(`ENTENDEU, ${maiusculas(MARIA)}!?`) ;