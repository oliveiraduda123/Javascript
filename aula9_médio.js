import calc from "readline-sync";
let area = calc.questionInt("Digite o raio do circulo: ");
function circulo(area) {
	let circ = (area * area) * 3.14;
  return circ
}
console.log('A área do círculo é de: ', circulo(area))

import valor from "readline-sync";
let celsius = valor.questionFloat("Digite a temperatura em graus Celsius: ");
function temp(celsius) {
	let fahr = celsius * 1.8 + 32;
	return fahr;
}
console.log("Temperatura em graus Celsius: ",celsius)
console.log("A temperatura em Fahrenheit é de: ", temp(celsius));

import valor, { question } from "readline-sync";
let altura = valor.questionFloat("Digite sua altura: ");
let peso = valor.questionFloat("Digite seu peso: ");
function calculo(altura, peso) {
	let imc = peso / (altura * altura);
	return imc.toFixed(2);
}
console.log("Seu I.M.C será de: ", calculo(altura, peso));