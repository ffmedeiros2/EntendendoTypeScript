// @logarClasse
// @logarClasseSe(true)
// @decorator('teste', 1)
// @logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo...');
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor);
}

function decoratorVazio(_: Function) { }

// FACTORIES
function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : decoratorVazio;
}
function decorator(a: string, b?: number) {
    return function(_constructor: Function): void {
        console.log(a + ' ' + b);
    }
}

type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor) {
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes...');
            super(...args);
            console.log('Depois...');
        }
    }
}

new Eletrodomestico()
new Eletrodomestico()

// é necessário ter essa interface para que seja possível criar um objeto com o método imprimir
interface Eletrodomestico {
    imprimir?(): void
}

function imprimivel(construtor: Construtor) {
    construtor.prototype.imprimir = function() {
        console.log(this);
    }
}

// como o método imprimir é opcional na interface Eletrodomestico é necessário verificar se o mesmo existe
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();


// DESAFIO Decorator perfilAdmin
function perfilAdmin<T extends Construtor> (construtor: T) {
// function perfilAdmin<T extends Construtor> (construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Você não possui permissão para executar esta operação!');
            }
        }
    }
}

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

class ContaCorrente {
    @naoNegativo
    private saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    @congelar
    sacar(@paramInfo valor: number) {
        if(valor <= this.saldo) {
            this.saldo -= valor;
            return true;
        } else {
            return false;
        }
    }

    @congelar
    getSaldo(): number {
        return this.saldo;
    }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

// após aplicar o decorator é necessário comentar essas linhas para que não tenha erros
/* cc.getSaldo = function() {
    return this['saldo'] + 7000;
} */
console.log(cc.getSaldo());

function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
    console.log(alvo);
    console.log(nomeMetodo);
    descritor.writable = false;
}

function naoNegativo(alvo: any, nomePropriedade: string) {
    delete alvo[nomePropriedade];
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo['_' + nomePropriedade];
        },
        set: function(valor: any): void {
            if(valor < 0) {
                throw new Error('Saldo Inválido');
            } else {
                alvo['_' + nomePropriedade] = valor;
            }
        }
    });
}

function paramInfo(alvo: any, nomeMetodo: string,
    indiceParam: number) {
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);
    console.log(`Índice: ${indiceParam}`);
}


// links úteis
// https://www.typescriptlang.org/docs/handbook/decorators.html
