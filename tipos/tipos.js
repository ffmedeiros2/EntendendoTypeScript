// STRINGS
var nome = "João";
console.log(nome);
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'number' is not assignable to type 'string'.ts(2322)
// nome = 28;
// NUMBERS
var idade = 27;
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'string' is not assignable to type 'number'.ts(2322)
// idade = 'Ana';
//
// porém number aceita tanto valores inteiros quanto de ponto flutuante
idade = 27.5;
console.log(idade);
// BOOLEAN
var possuiHobbies = false;
// tipos são inferidos no momento da inicialização, então a atribuição
// abaixo apresentará o erro: Type 'number' is not assignable to type 'boolean'.ts(2322)
// possuiHobbies = 1;
console.log(possuiHobbies);
// TIPOS EXPLÍCITOS
// caso não seja explicitado o tipo, nem seja atribuído valor na inicialização
// temos que a variável receberá o tipo any
var minhaIdade;
minhaIdade = 26;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 26';
console.log(typeof minhaIdade);
// ARRAY
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
// não declarar explicitamente que um array é do tipo any[]
// implicará em um erro similar à: Type 'number' is not assignable to type 'string'.ts(2322)
// hobbies = [100];
// 
// declarar explicitamente que um array é do tipo any[]
// permite a declaração abaixo
var idades = [11, 23, 49];
idades = ["1"];
console.log(idades);
// porém não é possível assinalar um valor que não seja de um vetor (em ambos os casos)
// implicando no erro: Type 'number' is not assignable to type 'any[]'.ts(2322)
// idades = 1;
// TUPLAS
var endereco = ["Rua A", 1];
console.log(endereco);
// caso se tente atribuir um valor diferente do definido na tupla será lançada
// uma exceção indicando que há uma incongruência entre o tipo esperado e o tipo
// recebido, como no exemplo abaixo: Type '[]' is not assignable to type '[string, number]'.
// endereco = [];
// ENUMS
// é possível atribuir valores aos elementos do enumeration, mesmo repetidos
// o padrão é atribuir valore de forma crescente a partir de 0 (0, 1, 2 ...)
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Cinza"] = 100] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor["Azul"] = "Azul"; // Azul
})(Cor || (Cor = {}));
var minhaCor = Cor.Azul;
console.log(minhaCor);
// ANY
// funciona como uma variável no javascript
var carro = 'BMW';
console.log(carro);
carro = {
    marca: 'BMW',
    ano: 2019
};
console.log(carro);
// FUNÇÕES
function retornaMeuNome() {
    // caso uma função possua tipo explicito não será aceito um retorno diferente do
    // tipo, como no exemplo abaixo: Type 'Cor' is not assignable to type 'string'
    // return minhaCor;
    return nome;
}
console.log(retornaMeuNome());
//
// também é possível atribuir funções de tipo vazio
function digaOi() {
    console.log('oi');
    // assim como no caso anterior o tipo aqui é explícito: void. Assim, não é possível
    // retornar nenhum valor diferente de vazio
    // return nome;
}
digaOi();
//
// ao tentar compilar sem explicitar os parâmetros da função ocorre o erro abaixo
// TSError: ⨯ Unable to compile TypeScript:
// tipos/tipos.ts(111,21): error TS7006: Parameter 'num1' implicitly has an 'any' type.
// tipos/tipos.ts(112,27): error TS7006: Parameter 'num2' implicitly has an 'any' type.
// function multiplica(num1, num2): number {
//     return num1 * num2;
// }
function multiplica(num1, num2) {
    return num1 * num2;
}
console.log(multiplica(1, 2));
//
// 
