"use strict";
function echo(objeto) {
    return objeto;
}
// nestes casos o echo() de 27 e { nome: 'João', idade: 27 } terão length undefined
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }).length);
// USANDO GENERICS
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// GENERICS DISPONÍVEIS 
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// como o array está definido como sendo do tipo number ocorre o erro
// Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
/* avaliacoes.push('5.5'); */
console.log(avaliacoes);
// ARRAY
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 22 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 22 }
]);
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma Coisa'));
// CLASSE COM GENERICS
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new OperacaoBinaria('Bom ', 'dia').executar());
console.log(new OperacaoBinaria(3, 7).executar());
// nestes casos os valores serão todos convertidos em string e concatenados
console.log(new OperacaoBinaria(3, 'Opa').executar());
console.log(new OperacaoBinaria({}, {}).executar());
console.log(new OperacaoBinaria({}, null).executar());
class OperacaoBinariaComGererics {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
//
class SomaBinaria extends OperacaoBinariaComGererics {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
//
class DiferencaEntreDatas extends OperacaoBinariaComGererics {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
console.log(new DiferencaEntreDatas(new Data(1, 2, 2020), new Data(5, 2, 2020)).executar());
console.log(new DiferencaEntreDatas(new Data(1, 2, 2020), new Data(5, 5, 2022)).executar());
// DESAFIO CLASSE FILA
// Atributo: fila (Array)
// Métodos: entrar, proximo, imprimir
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(valor) {
        this.fila.push(valor);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const arrayString = ['item1', 'item2', 'item3'];
const fila = new Fila(...arrayString);
fila.imprimir();
fila.entrar('item4');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
fila.imprimir();
class FilaDeOpearacoes {
    constructor(...args) {
        this.fila = args;
    }
    entrar(valor) {
        this.fila.push(valor);
    }
    proximo() {
        if (this.fila.length > 0) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const ded1 = new DiferencaEntreDatas(new Data(1, 2, 2020), new Data(5, 2, 2020));
const ded2 = new DiferencaEntreDatas(new Data(1, 2, 2020), new Data(5, 2, 2022));
const filaDeOperacoes1 = new FilaDeOpearacoes(ded1, ded2);
filaDeOperacoes1.imprimir();
const sb1 = new SomaBinaria(3, 4);
const sb2 = new SomaBinaria(5, 16);
const filaDeOperacoes2 = new FilaDeOpearacoes(sb1, sb2);
class Mapa {
    constructor(...args) {
        this.mapa = args;
    }
    obter(chave) {
        const resultado = this.mapa.filter(elemento => elemento.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(elemento) {
        const encontrado = this.obter(elemento.chave);
        if (encontrado) {
            encontrado.valor = elemento.valor;
        }
        else {
            this.mapa.push(elemento);
        }
    }
    limpar() {
        this.mapa = new Array();
    }
    imprimir() {
        console.log(this.mapa);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
// links úteis
// https://www.typescriptlang.org/docs/handbook/generics.html
//# sourceMappingURL=genericos.js.map