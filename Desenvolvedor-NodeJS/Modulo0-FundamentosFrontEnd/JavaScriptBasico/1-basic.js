

document.getElementById("inner").innerHTML = "inserindo texto";

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("cuidado, se usar numa função chbamando, pode apagar o doc. apenas para teste");//@teste para teste


window.alert('alerta'); //para teste


console.log("console log");

//window.print();



// --------------------------------------------------------

//alert(escopoBlock); //o içamento tbm ocorre com let, porém não é inicializada dando ReferenceError
alert(a);//içamento. mesmo as variáveis sendo declarada posteriormente...
var a, b;
a = 5;
b = 10;

//alert(a+b);

var $lastname = "josue", _lastName = "carlos"; //os indentificadores de js são sensíveis. 
//alert($lastname + _lastName);


const $variavelConstante=0; //não pode reatribuir valor. se for objeto não pode redeclar, mas pode alterar os valores. tem block scope. O IÇAMENTO é a mesma coisa do let
let $variavelEscopoRestrito;

let escopoBlock =1; //block scope

{
    let escopoBlock = 2 //block scope
}

/*
==
===
!=
!==

&&
||
!
 */


var numero = 1;
var tipo= typeof(numero);
alert(tipo);

var notacao_cientifica = 123e5; //12300000
notacao_cientifica = 123e-5; //0.00123

var array = ["josue", 24, "developer"];

var objeto = {firstname:"josue", age:24 , job: "developer"};

alert("array: " + typeof array);

function aprendendo_function_mult(n1, n2){
    alert( "multiplicação: " + n1 * n2)
}

aprendendo_function_mult(2,2);

function aprendendo_function_soma(n1, n2){
    return n1 + n2;
}

var soma = aprendendo_function_soma(2,2);

var person_object = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    full_information: function(){
        return this.firstName + " " + this.lastName + " " + this.age + " " + this.eyeColor;
    }
  };

var firstName = person_object.firstName;
firstName = person_object["firstName"];

var full_information = person_object.full_information();
alert(full_information);


/*STRINGS */

var meu_nome = "josue \"carlos\" da \
sivla e josue";

var meu_nome_quantidade = meu_nome.length;  

var meu_nome_posicao = meu_nome.indexOf("da", 0);  //retornam -1 caso não ache  ||  (valor, posicao inicial)
var meu_nome_ultima_posicao = meu_nome.lastIndexOf("josue");

var extracao = meu_nome.slice(0,4); //(start, end)

var extracao2 = meu_nome.substring(0,4); //não aceita indice negativo

var extracao3 = meu_nome.substr(0,5);  //(start, length)

var substituicao = meu_nome.replace(/JOSUE/i, "manoel"); //ele retorna uma nova string, mas nao altera.   |  ela diferencia maiusc e minusc, assim usei expressao regbular /i para nao fazer distinção

var substituicao2 = meu_nome.replace(/JOSUE/g, "manoel"); //ele retorna uma nova string, mas nao altera.   |  expressao regular para substituir todas as manifestacoes /g

var maiuscula = meu_nome.toUpperCase();

var minuscula = meu_nome.toLowerCase();

var concatenacao = meu_nome.concat(" ","timbauba");

var remocao_de_espacos_brancos = meu_nome.trim(); //para o IE8 str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')

var nume = "1"
var preenchimento_start = nume.padStart(2, 0);
var preenchimento_end = preenchimento_start.padEnd(4,0);

var extrcao_caracter = meu_nome.charAt(0);
var extracao_caracter_unicode = meu_nome.charCodeAt(0);

var propriedade = meu_nome[0];

var x = 123.786;
var xx = x.toString();

var decimais = x.toFixed(1);  //return 123.8

var precisao = x.toPrecision(2)

var converter_numero = Number(nume);

var converter_inteiro = parseInt(converter_numero);
var converter_float = parseFloat(converter_numero);



var array = ["carro", "moto"];
var carro = array[0];

array[0] = "caminhao";

var array_quantidade = array.length;


for (var i = 0; i < array_quantidade; i++){
    console.log(array[i]);
}

var frutas_array = ['banana', 'maça','laranja','melão'];

var texto_frutas = '<ul>';
frutas_array.push('melancia');
frutas_array.forEach(funcao_frutas);

texto_frutas += '</ul>';

function funcao_frutas(value){
    texto_frutas += '<li>' + value + '</li>';
}

document.getElementById('frutas_array').innerHTML = texto_frutas;

Array.isArray(frutas_array);


var conercao_array_string = frutas_array.toString();

var uniao_array = frutas_array.join(" - "); //pode colocar um separador



var frutas = ['banana', 'maça','laranja','melão'];

frutas.pop();              // Removes the last element
frutas.push("Kiwi");       //  Adds a new element
frutas.shift();            // Removes the first element
frutas.unshift("Lemon");    // Adds a new element in firt
delete frutas[0];           // Changes the first element in fruits to undefined, O uso de delete pode deixar lacunas
frutas.splice(2, 0, "Lemon", "Kiwi");  //adiciona novos item. onde, exclusoes, valores
frutas.splice(0, 1);        // Removes the first element of fruits
var frutas_total = frutas.concat(frutas_array); 
var myChildren = myGirls.concat(myBoys);  //corta parte de uma matriz a partir do elemento 3 da matriz 
var citrus = fruits.slice(1, 3); //pode receber dois argumentos como slice(1, 3). O método então seleciona elementos do argumento inicial e até (mas não incluindo) o argumento final.
var ordem_alfabetica = fruits.sort(); //coloca em ordem alfabetica
var ordem_alfabetica_reversa = fruits.reverse();     // Then reverse the order of the elements


var points = [40, 100, 1, 5, 25, 10]; //coloca em ordem
points.sort(function(a, b){return a - b});



//*********** */

var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value + "<br>";
}






var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}






var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}





var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}






var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}







var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}





var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}








var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}






/***** DATA               DATA               DATA */
//meses de 0 a 11
//datas como um número de milissegundos desde 01 de janeiro de 1970

var data_full = new Date();
var d = new Date(2018, 11, 24, 10, 33, 30, 0); //ano, mês, dia, hora, minuto, segundo e milissegundo 

toDateString();//método converte uma data em um formato mais legível:


var msec = Date.parse("March 21, 2012"); //converte em milisegundos

var mili = data_full.getTime(); //retorna milis

// para pegar as datas
//getFullYear() //método retorna o ano de uma data como um número de quatro dígitos
getMonth() 
getDate()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getDay()


var setando = data_full.setFullYear(2020);
/*
para definição de data
.setMonth(11);
.setDate(15);
.setHours(22);
.setMinutes(30);
.setSeconds(30);

*/






//MATH MATH MATH MATH

/*

Math.round(4.2);    // returns 4
Math.ceil(4.2);     // returns 5
Math.floor(4.9);    // returns 4
Math.trunc(x) retorna a parte inteira de x

Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1

Math.pow(x, y) retorna o valor de x à potência de y
Math.sqrt(x) retorna a raiz quadrada de x:
Math.abs(x) retorna o valor absoluto (positivo) de x

Math.min(0, 150, 30, 20, -8, -200);  // returns -200
Math.max(0, 150, 30, 20, -8, -200);  // returns 150

Math.random();     // returns a random number  0-1
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9
Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10


*/



//OPERADOR TERNÁRIO     variablename = (condition) ? value1:value2 
var age = 10;
var voteable = (age < 18) ? "Too young":"Old enough"; 


if (age) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}


switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    console.log("d");
}

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) { //pecorre um array
  text += cars[i] + "<br>";
}


//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.



var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {// PECORRE AS PROPRIEDADE DE UM OBBJETO
  text += person[x];
}




for (let x of cars) {
  text += x + "<br>";
}




while (i < 10) {
  text += "The number is " + i;
  i++;
}



do {
  text += "The number is " + i;
  i++;
}
while (i < 10);

/**
 *  
 existem 5 tipos de dados diferentes que podem conter valores:
string
number
boolean
object
function


Existem 6 tipos de objetos:
Object
Date
Array
String
Number
Boolean

E 2 tipos de dados que não podem conter valores:
null
undefined
 */

var tipode = typeof "John"                 // Returns "string"
var construtor = "John".constructor         // Returns function String()  {[native code]}       constructorpropriedade retorna a função construtora para todas as variáveis ​​JavaScrip
var str = String(100 + 23)  // returns a string from a number from an expression     x.toString()

var numer = Number("3.14")    // returns 3.14


var y = "5";      // y is a stringb  operador unário + pode ser usado para converter uma variável em um número:
var x = + y;      // x is a number


/**
 * &
 * |
 * ~
 */


/**EXPRESSOES REGULARES
 * 
 * é uma sequência de caracteres que forma um padrão de pesquisa.  O padrão de pesquisa pode ser usado para pesquisa de texto e operações de substituição de texto.
 * 
 * / w3schools / i   é uma expressão regular.
 * w3schools   é um padrão (para ser usado em uma pesquisa).
 * i   é um modificador (modifica a pesquisa para não fazer distinção entre maiúsculas e minúsculas).
 * 
 * 
 * 
 */

 var str = "Visit W3Schools";
 var n = str.search(/w3schools/i);


 //o objeto RegExp é um objeto de expressão regular com propriedades e métodos predefinidos.

 var patt = /e/;
patt.test("The best things in life are free!"); //TRUE, pois tem e na string



var message, x;
message = document.getElementById("p01");
message.innerHTML = "";
x = document.getElementById("demo").value;
try {
  if(x == "") throw "is empty";
  if(isNaN(x)) throw "is not a number";
  x = Number(x);
  if(x > 10) throw "is too high";
  if(x < 5) throw "is too low";
}
catch(err) {
  message.innerHTML = "Error: " + err + ".";
}
finally {
  document.getElementById("demo").value = "";
}

/**PROPRIEDADE DO ERRO
 * nome e mensagem
 * 
 * VALORES DOS NOMES
 * RangeError é lançado se você usar um número que está fora da faixa de valores legais
 * ReferenceError é lançado se você usar (referência) uma variável que não foi declarada:
 * SyntaxError é lançado se você tentar avaliar o código com um erro de sintaxe
 * TypeErroré lançado se você usar um valor que está fora da faixa de tipos esperados:
 * URIErroré lançado se você usar caracteres ilegais em uma função URI
 * 
 */

/**dois tipos de escopo:
Escopo local
Âmbito global

avaScript tem escopo de função: cada função cria um novo escopo

avaScript tem escopo de função: cada função cria um novo escopo
*/


var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/**
 * 
 * Em um método, thisrefere-se ao objeto proprietário .
 * Sozinho, thisrefere-se ao objeto global 
 * Em um evento, thisrefere-se ao elemento que recebeu o evento.
 * Os métodos gostam call()e apply()podem referir this- se a qualquer objeto .
 * 
 */


/* função regular */
hello = function() {
  document.getElementById("demo").innerHTML += this;
}
document.getElementById("btn").addEventListener("click", hello); //SE liga no THIS!!   o elemento ´´e o proprietario


//funcao arraw - seta
hello = () => {
  document.getElementById("demo").innerHTML += this;
}
document.getElementById("btn").addEventListener("click", hello); //a window é a proprietaria da fubncao









class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";




/**JSON  JSON meios J ava S cript O bject N otation
 * 
 * é um formato para armazenar e transportar dados. JSON é frequentemente usado quando os dados são enviados de
 *  um servidor para uma página da web.
 * 
 * 
 */
 var text = '{"employees":[' +
 '{"firstName":"John","lastName":"Doe" },' +
 '{"firstName":"Anna","lastName":"Smith" },' +
 '{"firstName":"Peter","lastName":"Jones" }]}';
 
 obj = JSON.parse(text); //conversao para json
 document.getElementById("demo").innerHTML =
 obj.employees[1].firstName + " " + obj.employees[1].lastName;






//use assim
var x1 = {};           // new object
var x2 = "";           // new primitive string
var x3 = 0;            // new primitive number
var x4 = false;        // new primitive boolean
var x5 = [];           // new array object
var x6 = /()/;         // new regexp object
var x7 = function(){}; // new function object