"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { areaCircunferencia as circ } from "./circunferencia";
// import { areaRetangulo } from "./retangulo";
// é possível utilizar alias ou definir qual parte do arquivo é o padrão na hora da exportação
// Obs.: por algum motivo comentários de bloco dão erro com System.js
const retangulo_1 = __importDefault(require("./retangulo"));
const circunferencia_1 = require("./circunferencia");
// isto funciona no terminal, porém no browser não
// para isso será necessário utilizar o System.js
// numa situação real um transpilador será o responsável por realizar o gerenciamento dos módulos
console.log('Módulo carregado...');
console.log(retangulo_1.default(7, 8));
console.log(circunferencia_1.areaCircunferencia(2));
// import do node
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
// links úteis
// https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.21.6/system.js (CDN do SystemJS)
//# sourceMappingURL=modulos.js.map