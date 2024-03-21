let numero1 = 10;
let numero2 = 5;

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;

console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);

let idade1 = 25;
let idade2 = 30;

if (idade1 > idade2) {
    console.log(`A pessoa com ${idade1} é mais velha.`);
} else if (idade2 > idade1) {
    console.log(`A pessoa com ${idade2} é mais velha.`);
} else {
    console.log("As duas pessoas têm a mesma idade.");
}
let idade = 20;

let statusMaioridade = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(statusMaioridade);

let numero = 7;

let parOuImpar = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log(parOuImpar);