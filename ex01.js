const leia = require('readline-sync')
let salario;
let abono;

salario = leia.questionFloat('Digite o salario:');

abono = leia.questionFloat('Digite o Abono')

novoSalario =  salario + abono

console.log('seu novo salario é: ' + novoSalario)
