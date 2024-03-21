// 01-Escreva um programa que itere sobre as propriedades de um objeto e imprima suas chaves e valores.
console.log("\t--- Exercício 01 ---")
// Definir um objeto com algumas propriedades
const pessoa = {
    nome: "Lura",
    idade: 35,
    cidade: "São Miguel"
};

// Iterar sobre as propriedades do objeto pessoa usando for...in
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// 02-Escreva um programa que itere sobre os elementos de um array e imprima seus valores.
console.log("\n\t--- Exercício 02 ---")
// Definir um array com alguns valores
const cores = ["Vermelho", "Roxo", "Cinza", "Branco", "Vermelho"];

// Iterar sobre os elementos do array usando for...of
for (let cor of cores) {
    // Imprimir o valor do elemento
    console.log(cor);
}

// 03-Escreva um programa que itere sobre os caracteres de uma string e imprima cada caractere.
console.log("\n\t--- Exercício 03 ---")
// Definir uma string
const string = "JavaScript";

// Iterar sobre os caracteres da string usando for...of
for (let caractere of string) {
    // Imprimir o caractere
    console.log(caractere);
}