"use strict";
// é possível utilizar o comando tsc -w --outputfile <nome_arquivo_output.js> <lista_arquivos_input.ts>
// para realizar a compilação dos namespaces em um único arquivo, para tal deve-se estar no diretório onde o arquivo se encontra
// outra forma de referenciar o input é utilizando as anotações abaixo em conjunto com o comando
// tsc -w --outputfile <nome_arquivo.js> <nome_arquivo.ts>
///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>
// como a função circunferência existe unicamente em cada instância, não há conflitos
const PI = 3.14;
function circunferencia(raio) {
    return PI * Math.pow(raio, 2);
}
console.log(Geometria.Area.circunferencia(10));
console.log(circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
//# sourceMappingURL=namespaces.js.map