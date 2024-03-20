const leia = require('readline-sync');

let numero1;
let numero2;
let numero3;
let numero4;

numero1 = leia.questionFloat('Digite o primeiro numero ');
numero2 = leia.questionFloat('Digite o segundo numero ');
numero3 = leia.questionFloat('Digite o terceiro numero ');
numero4 = leia.questionFloat('Digite o quarto numero ');

let calculo = (numero1 * numero2) - (numero3 * numero4);
diferenca1 = calculo - (numero1 * numero2) 
diferenca2 = calculo - (numero3 * numero4) 

console.log('Diferenca: ',calculo);

