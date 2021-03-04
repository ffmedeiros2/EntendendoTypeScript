"use strict";
// let & const (existem a partir do es6)
// HOISTING
// caso uma var seja definida após seu uso ela será "içada" (hoisted) como no caso abaixo
// no navegador a var terá valor 'undefined'. Caso seja utilizado o let e o target seja o es5
// este será compilado para uma var, logo o mesmo comportamento de hoisting ocorrerá
// o let não permite esse comportamento
/* console.log(hoisting);
var hoisting = '?'; */
//
// o código equivale à
var hoisting;
console.log(hoisting);
hoisting = '?';
// ESCOPO
// uma var só possui 2 tipos de contexto local (dentro de uma função) ou global
// no caso abaixo a var acao pode ser acessada no console.log() mesmo que esta tenha sido
// declarada dentro de um if 
// o let/const não permitem esse comportamento, estes podem existir em um contexto de bloco ({})
/* let estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco';
}
console.log(acao) */
//
// caso o target de compilação seja <= es5 a const abaixo será compilada para um var
// logo ele funcionará normalmente
/* const cpf: string = '123.456.789.00';
cpf = '098.765.432-11';
console.log(cpf); */
//
// neste caso como existem 2 vars com mesmo nome aquela que pertence ao escopo será a utilizada 
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
//# sourceMappingURL=ecmascript.js.map