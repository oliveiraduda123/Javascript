//1.	Escreva um programa que declare duas variáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.
let nome = "João";
let idade = 25;

console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);

//2.	Declare uma string e utilize métodos para converter para maiúsculas e minúsculas.
let texto = "JavaScript";

let maiusculas = texto.toUpperCase();
let minusculas = texto.toLowerCase();

//3.	Declare uma variável e verifique se o tipo dela é number.
let exemplo = 42;

let isNumber = typeof exemplo === "number";

//4.	Calcule o Índice de Massa Corporal (IMC) utilizando variáveis para altura e peso.
let altura = 1.75;
let peso = 70;

let imc = peso / (altura * altura);
console.log(`O Índice de Massa Corporal (IMC) é: ${imc.toFixed(2)}`);