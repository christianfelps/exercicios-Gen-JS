const leia = require('readline-sync')

let salarioBruto;
let adcNoturno;
let hrsExtra;
let desconto;

salarioBruto = leia.questionFloat("Digite seu Salario Bruto: ");
adcNoturno = leia.questionFloat("Digite seu Adicional noturno: ");
hrsExtra = leia.questionFloat("Digite suas horas extras: ");
desconto = leia.questionFloat("Digite seu desconto: ");

let salarioLiq = salarioBruto + adcNoturno + (hrsExtra * 5) - desconto
console.log('Salario Liquido: ' + salarioLiq)