"use strict";
// o último tipo de declaração se baseia na sintaxe abaixo
/* const pe = {
    nome: 'Bia',
    idade: 31,
    ["abc"]: true
}
console.log(pe.abc); */
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// neste caso ao tentar passar um literal ocorrerá um erro
// Argument of type '{ nome: string; idade: number; }' is not assignable to parameter of type 'Humano'.
// Object literal may only specify known properties, and 'idade' does not exist in type 'Humano'.ts(2345)
/* saudarComOla({ nome: 'Jonas', idade: 27 }) */
//
// ao alterar a interface este problema não ocorrerá, porém como o método saudar não está sendo passado
// ainda ocorrerá um erro
/* saudarComOla({ nome: 'Jonas', idade: 27, altura: 1.75 }) */
pessoa.saudar('Skywalker');
// USANDO CLASSES
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);
let potencia = function (base, exp) {
    return Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(Math.pow(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function test(b) { }
test(new RealABC());
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() {
        return this.nome;
    }
};
cli.log();
//# sourceMappingURL=interfaces.js.map