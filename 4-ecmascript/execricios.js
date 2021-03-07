"use strict";
// Exercícios, traduzir os códigos de JavaScript para TypeScript
// Exercício 1
/* var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))*/
var dobro = function (valor) { return valor * 2; };
console.log(dobro(10));
// Exercício 2
/* var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
}
dizerOla()
dizerOla("Anna") */
var dizerOla = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
// Exercício 3 - imprimir o menor valor
/* var nums = [-3, 33, 38, 5]
console.log('???') */
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// Exercício 4 - Adicione os elementos de nums em array !
/* var nums = [-3, 33, 38, 5]
var array = [55, 20]
console.log(array) */
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// Exercício 5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
/* var notas = [8.5, 6.3, 9.4]
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
console.log(nota1, nota2, nota3) */
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
/* var cientista = {primeiroNome: "Will", experiencia: 12}
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia) */
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome, experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//# sourceMappingURL=execricios.js.map