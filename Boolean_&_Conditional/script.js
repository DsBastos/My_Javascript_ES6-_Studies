//BOOLEAN
//There are two Boolean values, true and false
var heHasCollege = true;
var heHasPhd = false;


//CONDITIONAL IF AND ELSE
//Verify if a expression is true with 'if', 
//otherwise is activeted 'else' 
var possuiGraduacao = true;

if(possuiGraduacao) {
  console.log('Possui graduação');
} else {
  console.log('Não possui graduação');
}
// return heHasCollege and dont execute 'else'


//CONDITIONAL ELSE IF
//If 'if' isn´t true, it test the 'else is' 
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

//SWITCH
//Com o switch você pode verificar se uma variável é igual à 
//diferentes valores utilizando o case. Caso ela seja igual, 
//você pode fazer alguma coisa e utilizar a palavra chave break; 
//para cancelar a continuação. 
//O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
var corFavorita = 'Azul';

switch (corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu.');
    break;
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break;
  default:
    console.log('Feche os olhos');
}


//TRUTHY E FALSY
//Existem valores que retornam true e outros que retornam false 
//quando verificados em uma expressão booleana.
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

// Truthy
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({});

//OPERADOR LÓGICO DE NEGAÇÃO !
//O operador !, nega uma operação booleana. Ou seja, !true é igual a false




