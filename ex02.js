const leia = require('readline-sync');

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = leia.questionFloat('Nota 1: ');
nota2 = leia.questionFloat('Nota 2: ');
nota3 = leia.questionFloat('Nota 3: ');
nota4 = leia.questionFloat('Nota 4: ');
media = (nota1 + nota2 + nota3 + nota4) / 4
console.log('A media do aluno é: ' + media)
