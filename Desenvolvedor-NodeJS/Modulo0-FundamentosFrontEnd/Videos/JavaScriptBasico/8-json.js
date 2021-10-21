/*
JSON meios J ava S cript O bject N otation

JSON é um formato de texto para armazenamento e transporte de dados

JSON é "autodescritivo" e fácil de entender


JSON meios J ava S cript O bject N otation
JSON é um formato de intercâmbio de dados leve
JSON é um texto simples escrito em notação de objeto JavaScript
JSON é usado para enviar dados entre computadores
JSON é independente de linguagem.
A sintaxe JSON é derivada da notação de objeto JavaScript, mas o formato JSON é somente texto.



'{"name":"John", "age":30, "car":null}'*/
JSON.parse() //converter strings JSON em objetos JavaScript:
JSON.stringify() //converter um objeto em uma string JSON:

/*Tipos de dados JSON

Tipos de dados válidos
    uma linha
    um número
    um objeto (objeto JSON)
    uma matriz
    um booleano
    nulo
Tipos de dados inválidos
    uma função
    um encontro
    Indefinido*/

//JSON Strings
{"name":"John"}
//Números JSON
{"age":30}
//Objetos JSON
{
    "employee":{"name":"John", "age":30, "city":"New York"}
}
//Matrizes JSON
{
    "employees":[ "John", "Anna", "Peter" ]
}
//JSON Booleans
{ "sale":true }
//JSON nulo
{ "middlename":null }




/*JSON .parse ()
Ao receber dados de um servidor web, os dados são sempre uma string.
 converter texto em um objeto JavaScript,
 */
//string
'{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;


//Objetos de data não são permitidos em JSON. Se você precisar incluir uma data, escreva-a como uma string.
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth; 




/*JSON .stringify ()   
Ao enviar dados para um servidor web, os dados devem ser uma string.
converta um objeto JavaScript em uma string com JSON.stringify().
*/
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj); //converte obj em str

//Stringify um Array JavaScript
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);




//Armazenamento de dados
// Storing data: Armazenamento de dados
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data: Recuperando dados
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;







/*Literais de objeto JSON
É um erro comum chamar um objeto JSON literal de "um objeto JSON".
JSON não pode ser um objeto. JSON é um formato de string.
Os dados são JSON apenas quando estão em um formato de string. Quando é convertido em uma variável JavaScript, torna-se um objeto JavaScript.

vc pode tratar a string json como obj js com o parse(). pois tem sintaxe igual
https://www.w3schools.com/js/js_json_objects.asp*/



/*JSON Array Litterals*/
'["Ford", "BMW", "Fiat"]' /*array json. s valores da matriz devem ser do tipo string, número, objeto, matriz, booleano ou nulo .*/
["Ford", "BMW", "Fiat"] //array js. pode incluir no js tbm incluindo funções, datas e indefinido.

const myJSON = '["Ford", "BMW", "Fiat"]';
const myArray = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myArray[0];



/*Servidor JSON

Enviando dados*/
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;

//recebendo
const myJSON = '{"name":"John", "age":31, "city":"New York"}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

//JSON de um servidor :: usando uma solicitação AJAX
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

//Array como JSON   e AJAX
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
}
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();










/*JSON PHP
PHP tem algumas funções integradas para lidar com JSON.  função PHP json_encode () converte obj php em json*/
<?php
$myObj->name = "John";
$myObj->age = 30;
$myObj->city = "New York";

$myJSON = json_encode($myObj);

echo $myJSON;
?>

//lado do cliente
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
}
xmlhttp.open("GET", "demo_file.php");
xmlhttp.send();

//array
<?php
$myArr = array("John", "Mary", "Peter", "Sally");

$myJSON = json_encode($myArr);

echo $myJSON;
?>

//client
var xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj[2];
}
xmlhttp.open("GET", "demo_file_array.php", true);
xmlhttp.send();

//BANCO DE DADOS PHP https://www.w3schools.com/js/js_json_php.asp



//JSONP
/* é um método para enviar dados JSON sem se preocupar com problemas entre domínios.

JSONP não usa o XMLHttpRequestobjeto.

Em <script>vez disso, o JSONP usa a tag*/
