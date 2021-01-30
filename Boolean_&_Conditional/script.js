//BOOLEAN
//There are two Boolean values, true and false
var heHasCollege = true;
var heHasPhd = false;


//CONDITIONAL IF AND ELSE
//Verify if a expression is true with 'if', 
//otherwise is activeted 'else' 
var heHasCollege = true;

if(heHasCollege) {
  console.log('He has college');
} else {
  console.log('He hasn´t college');
}
// return heHasCollege and dont execute 'else'


//CONDITIONAL ELSE IF
//If 'if' isn´t true, it test the 'else is' 
var heHasCollege = true;
var heHasPhd = false;

if(heHasPhd) {
  console.log('He has college and PHD');
} else if(heHasCollege) {
  console.log('He has college, but hasn´t phd');
} else {
  console.log('He hasn´t college');
}
// return He has college, but hasn´t phd

//SWITCH
//With switch you can check if a variable is equal to
// different values using the case. If it is the same,
// you can do something and use the keyword break;
// to cancel the continuation.
// The default value will occur if none of the above is true.
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


//TRUTHY AND FALSY
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

//LOGICAL OPERATOR OF DENIAL !
//The "!" Operator denies a Boolean operation. 
//That is, "! True" is equal to false

if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' ') // true
if(!!''); // false

//Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

//COMPARISON OPERATORS
//Vão sempre retornar um valor booleano

10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//COMPARISON OPERATORS
//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//OPERADORES LÓGICOS &&
//&& Compara se uma expressão e a outra é verdadeira

true && true; // true
true && false; // false
false && true; // false
'cat' && 'dog'; // 'dog'
(5 - 5) && (5 + 5); // 0
'cat' && false; // false
(5 >= 5) && (3 < 6); // true

//If both values are true it will return the last checked value.
//If any value is false it will return the same value 
//and will not continue to check the next ones.

//LOGICAL OPERATORS ||
// "||" Compare whether one expression or the other is true

true || true; // true
true || false; // true
false || true; // true
'cat' || 'dog'; // 'cat'
(5 - 5) || (5 + 5); // 10
'cat' || false; // cat
(5 >= 5) || (3 < 6); // true

// return the first valuer true ir finds