"use strict";
var canal = 'Gaveta';
var inscritos = 610234;
// canal = inscritos;
console.log("Canal = " + canal);
// não pode declarar duas variável com mesmo nome no mesmo escopo
// como compilador.ts e tipos.ts estão no mesmo contexto há o erro abaixo
// tipos/tipos.ts:2:5 - error TS2451: Cannot redeclare block-scoped variable 'nome'.
// [18:48:08] File change detected. Starting incremental compilation...
// let nome = 'Pedro';
// o atributo 'noImplicitAny' do arquivo tsconfig é true por padrão
// assim, haverá um erro no caso abaixo: Parameter 'a' implicitly has an 'any' type.ts(7006)
// function soma(a, b) {
//     return a + b
// }
// neste caso não erro pois o compilador sabe em todos os instântes qual tipo
// a variável 'qualquerCoisa' pode assumir number & string logo após, diferente da função anterior
// onde nunca era possível saber quais valores a e b podem assumir
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
// o atributo 'strictNullChecks' do arquivo tsconfig é true por padrão
// assim, haverá um erro no caso abaixo: Variable 'saudacao' is used before being assigned.ts(2454)
// pois a variável pode ser nula no ponto de retorno
// function saudar(isManha: boolean): string {
//     let saudacao: string
//     if (isManha) {
//         saudacao = 'Bom dia';
//     }
//     return saudacao;
// }
// o atributo 'noUnusedParameters' do arquivo tsconfig é true por padrão 
// assim a funcao abaixo não exibe um erro, mesmo nuca utilizando o atributo 'horas'
function saudar(isManha, horas) {
    // o atributo 'noUnusedLocals' do arquivo tsconfig é true por padrão
    // assim, não há erro mesmo que o atributo 'a' nunca seja utilizado
    var a = 1;
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Tenha uma boa vida!';
    }
    return saudacao;
}
// é possível alterar o diretório de saída utilizando o atributo 'outDir' do arquivo tsconfig
// seu valor padrão é './'. Caso coloquemos um valor './build' todos os arquivos seriam compilados
// para este diretório
// é possível também fazer o build do projeto para um único arquivo utilizando o atributo 'outFile'
// do arquivo tsconfig. Neste caso também será necessário trocar o atributo 'module' para system
// links úteis
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
//# sourceMappingURL=compilador.js.map