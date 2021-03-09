/* interface Humano {
    nome: string
} */
interface Humano {
    nome: string,
    // neste caso o atributo é opcional
    idade?: number,
    // neste caso a propriedade tem nome variável e é opcional
    [property: string]: any
    // o método saudar() é obrigatório na interface Humano
    saudar(sobrenome: string): void
}
// o último tipo de declaração se baseia na sintaxe abaixo
/* const pe = {
    nome: 'Bia',
    idade: 31,
    ["abc"]: true
}
console.log(pe.abc); */

function saudarComOla(pessoa: Humano) {
    console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}

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

pessoa.saudar('Skywalker')


// USANDO CLASSES
class Cliente implements Humano {
    nome: string = '';
    ultimaCompra : Date = new Date();

    saudar(sobrenome: string): void {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}

const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
console.log(meuCliente.ultimaCompra);


// INTERFACE FUNÇÃO
interface FuncaoCalculo {
    (a: number, b: number): number;
}

let potencia: FuncaoCalculo = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a ) => t*a);
}

console.log(potencia(3, 10));
console.log(3**10);
console.log(Math.pow(3, 10));


// Herança
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void { }
}

class RealAB implements A, B {
    a(): void { }
    b(): void { }
}

class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}

function test(b: B) { }
test(new RealABC());

// em TypeScript é necessário implementar interfaces, mesmo que em uma classe Abstrata
// Class 'AbstractAB' incorrectly implements interface 'A'.
//   Property 'a' is missing in type 'AbstractABC' but required in type 'A'.ts(2420)
// interfaces.ts(86, 5): 'a' is declared here.
// Class 'AbstractAB' incorrectly implements interface 'B'.
//   Property 'b' is missing in type 'AbstractABC' but required in type 'B'.ts(2420)
// interfaces.ts(90, 5): 'b' is declared here.
/* abstract class AbstractAB implements A, B {

} */


// USO DE INTERFACE PARA EXTENDER OBJECT
// neste caso define-se que Object terá um método do tipo log
// assim, é necessário implementar este método
interface Object {
    log(): void;
}

Object.prototype.log = function() {
    console.log(this.toString());
}

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
}
cli.log();
