let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

/*
Objetos escritos como pares nome-valor são semelhantes a:

Matrizes associativas em PHP
Dicionários em Python
Tabelas de hash em C
Mapas hash em Java
Hashes em Ruby e Perl*/


const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

const x = person;  // Will not create a copy of person.  O objeto x não é uma cópia da pessoa. É uma pessoa

person.firstname + " is " + person.age + " years old.";
person["firstname"] + " is " + person["age"] + " years old.";


//LOOP
for (let x in person) {
    txt += person[x];
}



person.nationality = "English"; //ADD nova propriedade:valor

delete person.age; //excluindo



myObj = {
    name:"John",
    age:30,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}

myObj.cars.car2;
myObj.cars["car2"];
myObj["cars"]["car2"];



//matriz mais objeto alinhado
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", "models":["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", "models":["320", "X3", "X5"]},
      {name:"Fiat", "models":["500", "Panda"]}
    ]
}

//acessar 
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
      document.getElementById("demo").innerHTML = x;
    }
}


/*com funcao*/
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
  };
  
document.getElementById("demo").innerHTML = person.fullName();



const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
var myArray = Object.values(person);/*converte para matriz*/

var myString = JSON.stringify(person);/*convertida para string  O resultado será uma string seguindo a notação JSON:*/



document.getElementById("demo").innerHTML = person.age; /*para acessar*/


/*GETTERS E SETTERS*/
const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.fullName;

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang.toUpperCase();
    }
  };
  
  // Set an object property using a setter:
  person.lang = "en";
  
  // Display data from the object:
document.getElementById("demo").innerHTML = person.language;




/*Construtores de objetos JavaScript*/

// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create two Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  const myMother = new Person("Sally", "Rally", 48, "green");





  /*PROTOTIPOS DE OBJ JS Todos os objetos JavaScript herdam propriedades e métodos de um protótipo.*/
  /*
  Herança de protótipo
Todos os objetos JavaScript herdam propriedades e métodos de um protótipo:

Date objetos herdam de Date.prototype
Array objetos herdam de Array.prototype
Person objetos herdam de Person.prototype
O Object.prototypeestá no topo da cadeia de herança do protótipo:

Dateobjetos, Arrayobjetos e Personobjetos herdados de Object.prototype.*/

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";/*ESSE é o modo de inserir novas propriedades aos construtores se ser de uma forma forçada.*/
  Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
  };

  



