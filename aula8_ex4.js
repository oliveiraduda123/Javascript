console.log("\t--- Exercício 01 ---")

const pessoa = {
    nome: "Lura",
    idade: 35,
    cidade: "São Miguel"
};

for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

console.log("\n\t--- Exercício 02 ---")

const cores = ["Vermelho", "Roxo", "Cinza", "Branco", "Vermelho"];

for (let cor of cores) {
    console.log(cor);
}

console.log("\n\t--- Exercício 03 ---")

const string = "JavaScript";

for (let caractere of string) {
    console.log(caractere);
}