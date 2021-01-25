var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

//-------------------------//
var nome = 'André';
var idade = 28;
var time = null;
var simbolo = Symbol();
console.log(typeof simbolo);

var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);


//var gols = 1000;
//var frase = 'Romário fez ' + gols + ' gols';
//console.log(typeof frase);


var ano ='2018';
var mes = 8;
console.log(ano + mes);


//------------------------------

'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil"; // Inválido

//--------------------------------------------

var melhor = 'teste';
var frase1 = "Esse é o melhor \"melhor\" jogo";
console.log(frase1);


var gols = 1000;
var frase2 = `Romário fez ${gols * 2} gols`; // Utilizando Template String


console.log(frase2);