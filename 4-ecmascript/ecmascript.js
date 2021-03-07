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
// ARROW FUNCTION
// abaixo temos uma declaração de uma função subtrair()
/* function subtrair(n1: number, n2: number): number {
    return n1 - n2;
}
console.log(subtrair(2, 1)); */
//
// outra forma de declarar uma função é vista abaixo, onde temos a atribuição de uma função anônima à variável somar
/* const somar = function(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(somar(2, 2)); */
//
// uma arrow function é sempre anônima, sua sintaxe é uma simplificação da declaração implícita vista acima
const somar = (n1, n2) => n1 + n2;
console.log(somar(2, 2));
//
// caso o corpo da arrow function seja um bloco de código é necessário explicitamente declarar um retorno, caso a função o tenha
const subtrair = (n1, n2) => {
    return n1 - n2;
};
console.log(subtrair(2, 1));
//
// uma arrow function também pode receber nenhum parâmetro
const saudacao = () => console.log('Olá');
saudacao();
//
// caso uma arrow function receba apenas 1 parâmetro é possível escrevê-la sem os parenteses (apenas em JavaScript)
// em TypeScript ocorrerá o erro: Parameter 'pessoa' implicitly has an 'any' type.ts(7006)
// assim, é necessário explicitar o tipo do parâmetro
/* const falarCom = pessoa => console.log('Ola ' + pessoa);
falarCom('João'); */
/* function normalComThis() {
    console.log(this);
} */
// THIS
// ao executar em um navegador irá ser impresso o valor do contexto atual, neste caso provavelmente será window ou undefined
// caso seja executado no terminal será impresso um objeto vazio
/* console.log(this); */
//
// O caso abaixo possui o mesmo comportamento em um navegador
// porém se executado no terminal ocorrerá o erro abaixo, já que não existe uma referência para um contexto atual da função
/* <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
} */
/* normalComThis(); */
//
// o método bind() cria uma função com mesmo corpo da função original, que está associado à um determinado objeto
/* const normalComThisEspecial = normalComThis.bind(2);
normalComThisEspecial(); */
//
// o contexto de uma função arrow é o mesmo daquele onde ela foi definida, logo ele nunca varia
/* const arrowComThis = () => console.log(this);
arrowComThis.bind(2);
arrowComThis(); */
// PARÂMETRO PADRÃO
function contagemRegressiva(inicio = 3) {
    while (inicio > 0) {
        console.log(inicio--);
    }
    console.log('Fim!');
}
;
contagemRegressiva();
contagemRegressiva(5);
//
// também é possível utilizar um parâmetro já declarado como base para calcular o valor padrão de outro parâmetro
function contagemRegressiva2(inicio = 3, fim = inicio - 5) {
    while (inicio > fim) {
        console.log(inicio--);
    }
    console.log('Fim!');
}
;
contagemRegressiva2();
contagemRegressiva2(5);
// REST & SPREAD
// é possível utilizar o operador spread quando se tem um vetor e se deseja utilizá-lo para criar um novo vetor
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', ...turmaA, 'Miguel', 'Lorena'];
console.log(turmaB);
//
// por outro lado caso tenhamos o caso abaixo, onde desejamos criar um array a partir de parâmetros de entrada
function retornarArray(arg1, arg2) {
    return [arg1, arg2];
}
;
console.log(retornarArray(1, 2));
// 
// no caso acima temos uma quantidade de parâmetros fixa (2), caso desejemos uma quantidade variável é possível utilizar o operador rest
console.log(retornarArray2(1, 2, 3, 4, 5));
function retornarArray2(...args) {
    return args;
}
;
//
// outro uso do operador spread seria quando temos uma função que recebe uma coleção de números como no caso do método Math.max()
// que possui a assinatura max(...values: number[]), logo ele receberá esta coleção e a concatenará em um array (operador rest)
const numbers = [1, 10, 99, -5];
console.log(Math.max(...numbers));
// 
// outro ponto a ser considerado sobre o operador rest é que ele deve ser o último parâmetro em um método
// no exemplo abaixo temos o erro: A rest parameter must be last in a parameter list.ts(1014
/* function retornarArray3(...args: number[], a: number): number[] {
    return args;
} */
//
// REST & SPREAD (TUPLA)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
;
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
;
tuplaParam2(...tupla);
// DESTRUCTURING (ARRAY)
// o uso do destructuring facilita o acesso aos atributos de um array
const caracteristicas = ['Motor Zetec 1.8', 2020];
const [motor, ano] = caracteristicas;
console.log(`Carro: motor ${motor}, ano ${ano}`);
// DESTRUCTURING (OBJETO)
// também é possível utilizar o destructuring com objetos
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
// aqui são utilizados os alias n e p para os atributos nome e preco respectivamente
// o uso do alias é opcional
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(`item: ${n} - ${p}`);
console.log(`caracteristicas: ${w}`);
// TEMPLATE STRING
const usuarioID = 'SupportCod3r';
const notificacoes = '19';
/* const boasVindas = 'Boas vindas ' + usuarioID +
    ' Notificações: ' + notificacoes; */
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
// CALLBACK
// supunha o cenário abaixo, onde após 3s um evento ocorre
/* function esperar3s() {
    setTimeout(() => {
        console.log('3s depois...');
    }, 3000);
}
esperar3s(); */
// caso este evento fosse um retorno não seria possível utilizar este valor simplesmente
/* function esperar3sRetorna() {
    setTimeout(() => {
        return '3s depois...';
    }, 3000);
}
const resultado = esperar3sRetorna();
console.log(resultado); */
// como temos um evento assíncrono é necessário utilizar uma função callback, ou seja, é passada como parâmetro
// uma função que será executada quando o evento assíncrono ocorrer
/* function esperar4sCallback(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('4s depois...')
    }, 4000);
}
esperar4sCallback(function (resultado: string) {
    console.log(resultado);
}) */
// outra forma de alcançar este resultado é utilizando promises (solução disponível apenas em es2015+)
/* function esperar2sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('2s depois...')
        }, 2000);
    });
}
esperar2sPromise()
    .then(dado => console.log(dado)); */
// o método fetch é do objeto window, logo só funciona no browser
// a resposta do fetch é uma promise
/* fetch('https://swapi.dev/api/people/1/')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme.title))
    .catch(err => console.log(err)) */
// links úteis
// http://kangax.github.io/compat-table/es6/
// https://swapi.dev/
//# sourceMappingURL=ecmascript.js.map