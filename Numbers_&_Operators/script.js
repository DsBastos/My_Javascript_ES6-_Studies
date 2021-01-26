//Numbers
var age = 28;
var goals = 1000;
var pi = 3.14; // point to decimal
var exp = 2e10; // 20000000000


//OPERADORES ARITMÉTICOS
var plus = 100 + 50; // 150
var subtraction = 100 - 50; // 50
var multiplication = 100 * 2; // 200
var division = 100 / 2; // 50
var exponent = 2 ** 4; // 16
var module = 14 % 5; // 4


//ARITHMETIC OPERATORS (STRINGS)
var plus = '100' + 50; // 10050
var subtraction = '100' - 50; // 50
var multiplication = '100' * '2'; // 200
var division = 'i buy 10' / 2; // NaN (Not a Number)
//It is possible to check whether a variable 
//is NaN or not with the isNaN () function


//NAN = NOT A NUMBER
var number = 80;
var unit = 'kg';
var weight = number + unit; // '80kg'
var weightPerTwo = weight / 2 // NaN (Not a Number)


//ORDER MATTERS
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40


//UNITARY ARITHMETIC OPERATORS
// + and - transform the following valor in number

var phrase = 'This is a test';
+phrase; // NaN
-phrase; // NaN

var age = '28';
+age; // 28 (number)
-age; // -28 (number)
console.log(+age + 5); // 33 

var heHasCollege = true;
console.log(+heHasCollege); // 1
