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
