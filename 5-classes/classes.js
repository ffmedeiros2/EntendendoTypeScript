"use strict";
class Data {
    // o construtor de uma classe sempre tem o nome constructor
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
// como os atributos são do tipo public, neste caso, é possível alterá-los diretamente
aniversario.dia = 4;
console.log(aniversario.dia);
const casamento = new Data; // é possível omitir os parênteses
casamento.ano = 2017;
console.log(casamento);
// também é possível declarar os atributos da classe diretamente no seu construtor
class DataEsperta {
    // o construtor de uma classe sempre tem o nome constructor
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
console.log(aniversarioEsperto);
// como os atributos são do tipo public, neste caso, é possível alterá-los diretamente
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto.dia);
const casamentoEsperto = new DataEsperta; // é possível omitir os parênteses
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passabdi dois e três parâmetros
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const produto1 = new Produto('Produto 1', 50, 0.05);
const produto2 = new Produto('Produto 2', 20);
console.log(produto1);
console.log(produto2);
// MÉTODOS
// Desafio Método
// criar um métido precoComDesconto()
// Quais são os parâmetros de retorno?
// Alterar o método resumo para mostrar o preço com desconto
/* class ProdutoResumo {
    constructor(public nome: string, public preco: number,
        public desconto: number = 0) { }

    resumo(): string  {
        return `${this.nome} custa R$${this.preco} (${this.desconto}% off)`
    }
} */
class ProdutoResumo {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const prod1 = new ProdutoResumo('Caneta Bic Preta', 4.20);
prod1.desconto = 0.06;
console.log(prod1.resumo());
const prod2 = new ProdutoResumo('Caderno Escolar', 18.80, 0.15);
console.log(prod2.resumo());
// MODIFICADORES DE ACESSO
class Carro {
    constructor(marca, modelo, velociadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velociadeMaxima = velociadeMaxima;
        this.velocidadeAtual = 0;
    }
    // necessário alterar por causa da herança usada abaixo
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
            && novaVelocidade <= this.velociadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velociadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'ka', 185);
// uma forma de fazer um laço (só válido em es2015+)
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(50).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
// simulando alguns 'erros' de modificadores de acesso
// por mais que o TypeScript indique erro, caso o tsconfig permita compilação neste caso
// será possível burlar o modificador de acesso, já que estes modificadores não são do JavaScript
/* carro1.velocidadeAtual = 300;
console.log('atual -> ' + carro1.velocidadeAtual); */
/* carro1.velocidadeMaxima = 500;
console.log('máxima -> ' + carro1.velocidadeMaxima); */
// HERANÇA
class Ferrari extends Carro {
    constructor(modelo, velociadeMaxima) {
        // super chama a classe pai
        super('Ferrai', modelo, velociadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// GETTERS & SETTERS
// os modificadores get e set permitem criar uma interface para acessar atributos internos de uma classe
// como se fossem públicos, porém é possível ter um controle maior sobre suas atribuições
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1.idade);
// ATRIBUTOS E MÉTODOS ESTÁTICOS
class Matematica {
    static areaCirc(raio) {
        return Matematica.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
// CLASSE ABSTRATA
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        // o método reduce() opera sobre todos os valores de um array
        // onde t é o valor total e a é o valor atual
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// SINGLETON
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// neste caso como o construtor é privado não é possível instânciar um objeto do tipo Unico
// assim ocorre o erro: Constructor of class 'Unico' is private and only accessible within the class declaration.ts(2673)
/* const errado = new Unico() */
console.log(Unico.getInstance().agora());
// READ ONLY
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
// neste caso ocorrerá o erro: Cannot assign to 'modelo' because it is a read-only property.ts(2540)
/* turboHelice.modelo = 'DC-8'; */
console.log(turboHelice);
//# sourceMappingURL=classes.js.map