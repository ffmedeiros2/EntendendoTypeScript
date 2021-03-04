// STRINGS
let nome: string = "João";
console.log(nome);
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'number' is not assignable to type 'string'.ts(2322)
// nome = 28;


// NUMBERS
let idade: number = 27;
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'string' is not assignable to type 'number'.ts(2322)
// idade = 'Ana';
//
// porém number aceita tanto valores inteiros quanto de ponto flutuante
idade = 27.5;
console.log(idade);


// BOOLEAN
let possuiHobbies: boolean = false;
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'number' is not assignable to type 'boolean'.ts(2322)
// possuiHobbies = 1;
console.log(possuiHobbies);


// TIPOS EXPLÍCITOS
// caso não seja explicitado o tipo, nem seja atribuído valor na inicialização
// temos que a variável receberá o tipo any
let minhaIdade;
minhaIdade = 26;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 26';
console.log(typeof minhaIdade);


// ARRAY
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// não declarar explicitamente que um array é do tipo any[]
// implicará em um erro similar à: Type 'number' is not assignable to type 'string'.ts(2322)
// hobbies = [100];
// 
// declarar explicitamente que um array é do tipo any[]
// permite a declaração abaixo
let idades: any[] = [11, 23, 49];
idades = ["1"];
console.log(idades);
// porém não é possível assinalar um valor que não seja de um vetor (em ambos os casos)
// implicando no erro: Type 'number' is not assignable to type 'any[]'.ts(2322)
// idades = 1;


// TUPLAS
let endereco: [string, number] = ["Rua A", 1];
console.log(endereco);
// caso se tente atribuir um valor diferente do definido na tupla será lançada
// uma exceção indicando que há uma incongruência entre o tipo esperado e o tipo
// recebido, como no exemplo abaixo: Type '[]' is not assignable to type '[string, number]'.
// endereco = [];


// ENUMS
// é possível atribuir valores aos elementos do enumeration, mesmo repetidos
// o padrão é atribuir valore de forma crescente a partir de 0 (0, 1, 2 ...)
enum Cor {
    Amarelo,      // 0
    Cinza = 100,  // 100
    Verde = 100,  // 100
    Azul = 'Azul' // Azul
}
let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);


// ANY
// funciona como uma variável no javascript
let carro: any = 'BMW';
console.log(carro);
carro = { 
    marca: 'BMW',
    ano: 2019
};
console.log(carro);


// FUNÇÕES
function retornaMeuNome(): string {
    // caso uma função possua tipo explicito não será aceito um retorno diferente do
    // tipo, como no exemplo abaixo: Type 'Cor' is not assignable to type 'string'
    // return minhaCor;
    return nome;
};
console.log(retornaMeuNome());
//
// também é possível atribuir funções de tipo vazio
function digaOi(): void {
    console.log('oi');
    // assim como no caso anterior o tipo aqui é explícito: void. Assim, não é possível
    // retornar nenhum valor diferente de vazio
    // return nome;
};
digaOi();
//
// ao tentar compilar sem explicitar os parâmetros da função ocorre o erro abaixo
// TSError: ⨯ Unable to compile TypeScript:
// tipos/tipos.ts(111,21): error TS7006: Parameter 'num1' implicitly has an 'any' type.
// tipos/tipos.ts(112,27): error TS7006: Parameter 'num2' implicitly has an 'any' type.
// function multiplica(num1, num2): number {
//     return num1 * num2;
// }
// console.log(multiplica(1, 2));
function multiplica(num1: number, num2: number): number {
    return num1 * num2;
}
console.log(multiplica(1, 2));


// FUNÇÕES COMO TIPOS
const teste = function (a: number, b: number): boolean {
    return a > b;
}
console.log(typeof teste);
// outra forma de atribuir funções como tipo é especificando a assinatura do método que será aceito
let func: (x: number, y: number) => number;
// a variável pode ser utilizada antes de ser inicializada: Variable 'func' is used before being assigned.
// console.log(typeof func)
func = multiplica;
console.log(typeof func);


// OBJETOS
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// é necessário seguir a assinatura do objeto quando for alterá-lo
// neste caso:  Type '{}' is missing the following properties from type '{ nome: string; idade: number; }': nome, idade
// usuario = {}
// desde que os atributos do objeto sejam satisfeitos a ordem destes não importa
usuario = {
    idade: 40,
    nome: 'Maria'
};
console.log(usuario);


// DESAFIO 1
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores (2 ou 3)
        - Função de bater ponto que recebe a hora (numero) e retorna uma string:
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

let funcionario: { 
    supervisores: string[],
    baterPonto: (horas: number) => string 
};
funcionario = {
    supervisores: ['João', 'Maria'],
    baterPonto: function(horas: number) {
        if (horas <= 8) {
            return 'Ponto normal';
        } else {
            return 'Fora do horário'
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));


// ALIAS
type Funcionario = { 
    supervisores: string[],
    baterPonto: (horas: number) => string 
};
let funcionario2: Funcionario = {
    supervisores: ['João', 'Maria'],
    baterPonto: function(horas: number) {
        if (horas <= 8) {
            return 'Ponto normal';
        } else {
            return 'Fora do horário';
        }
    }
};


// UNION TYPES
let nota: string | number = 10;
console.log(`Minha nota é: ${nota}!`);
nota = '10';
console.log(`Minha nota é: ${nota}!`);
// com o uso do union type é possível definir mais de um tipo para uma variável
// caso tente colocar um tipo diferente como abaixo, ocorrerá um erro tipo: Type 'boolean' is not assignable to type 'string | number'.ts(2322)
// nota = false


// CHECANDO TIPO
let  valor = 30
if (typeof valor === 'number') {
    console.log('É um number!');
} else {
    console.log(typeof valor);
}


// NEVER
// a função nuca retorna nenhum valor, nem mesmo void. Pode ser um loop infinito ou ter uma exceção lançada
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: 8,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if(this.preco <= 0) {
            falha('Preço inválido!');
        }
    }
};

produto.validarProduto();


// VALORES OPCIONAIS COM TIPO NULL
let altura = 12;
// normalmente não é possível atribuir null à uma variável tipada: Type 'null' is not assignable to type 'number'.ts(2322)
// altura = null;
// é possível alterar esse comportamento utilizando union type
let alturaOpcional: number | null = 20;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '999201983',
    tel2: null
}

console.log(contato1)


// DESAFIO 2
// Escrever o código abaixo em TS
/* let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista) */

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
};

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
};

let contaBancaria:ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
};

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
