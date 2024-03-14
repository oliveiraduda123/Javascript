//1. Crie um programa que declare duas variáveis e exiba o resultado da soma,
//subtração, multiplicação e divisão desses números.
//2. Declare duas idades e utilize operadores de comparação para verificar se uma
//pessoa é mais velha que a outra.
//3. Crie uma variável idade com um número e use o operador ternário para verificar
//se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de
//idade” ou “Menor de idade”.
//4. Crie uma variável com um número e use o operador ternário para verificar se é
//par ou ímpar.

var nome = "Maria Eduarda";
var idade = 16;
console.log("Olá, meu nome é", nome, "e eu tenho", idade, "anos.");

var nome = "Maria Eduarda";
console.log(nome.toUpperCase());

var valor = 16;
console.log(typeof valor);

var altura = 1.70;
var peso = 67;
var imc = (peso / (altura * altura));
console.log(imc.toFixed(2));

var num_01 = 15
var num_02 = 5
console.log("Soma:", num_01 + num_02);
console.log("Subtração:", num_01 - num_02);
console.log("Multiplicação:", num_01 * num_02); 
console.log("Divisão:", num_01 / num_02);

var idade_01 = 18;
var idade_02 = 15;
console.log(idade_01 > idade_02);

var idade = 17;
if (idade >= 18) {
    console.log("Maior de idade.")
}
else {
    console.log("Menor de idade.")
};

var num = 10;
if (num % 2 == 0) {
    console.log("Par.")
}
else {
    console.log("Ímpar.")
};
