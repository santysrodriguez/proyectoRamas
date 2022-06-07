
const { argv } = require('process')
const { sumar, restar, multiplicar, dividir } = require('./modules/calculadora');
let resultado = 0;
switch (argv[2]) {
    case 'sumar':
        resultado = sumar(+argv[3], +argv[4]);
        break;
    case 'restar':
        resultado = restar(+argv[3], +argv[4]);
        break;
    case 'multiplicar':
        resultado = multiplicar(+argv[3], +argv[4]);
        break;
    case 'dividir':
        resultado = dividir(+argv[3], +argv[4]);
        break;
    default:
        break;
}

console.log(resultado);