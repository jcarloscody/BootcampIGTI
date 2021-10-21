class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);






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







class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
  
let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old."; //passando parametro







/*HERANÇA */


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);//O super()método se refere à classe pai.   Ao chamar o super()método no método do construtor, chamamos o método do construtor do pai e obtemos acesso às propriedades e métodos do pai.
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
  
let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();




/*getter SETTERS*/
class Car {
    constructor(brand) {
      this._carname = brand;//Muitos programadores usam um caractere de sublinhado _ antes do nome da propriedade para separar o getter / setter da propriedade real:
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
}

let myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.carname;




/*Métodos estáticos de JavaScript */
class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
      return "Hello!!";
    }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello(); //Você não pode chamar um staticmétodo em um objeto, apenas em uma classe de objeto.
// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.







/*JavaScript Callbacks   
Um retorno de chamada é uma função passada como um argumento para outra função
Esta técnica permite que uma função chame outra função*/
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
/*No mundo real, os retornos de chamada são usados ​​com mais frequência com funções assíncronas.*/
myCalculator(5, 5, myDisplayer);




/*Asynchronous JavaScript       JavaScript assíncrono
Funções executadas em paralelo com outras funções são chamadas de assíncronas
Um bom exemplo é JavaScript setTimeout ()*/
setTimeout(myFunction, 3000);/*myFunctioné usado como retorno de chamada.*/
                      /* após 3 segundos.*/
function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}

setTimeout(function() { myFunction("I love You !!!"); }, 3000);
function myFunction(value) {
  document.getElementById("demo").innerHTML = value;
}

setInterval(myFunction, 1000);/*callback a cada 1 s*/
function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}











/*           JavaScript Promises 
"Produzir código" é um código que pode levar algum tempo
"Código de consumo" é o código que deve esperar pelo resultado
Uma promessa é um objeto JavaScript que vincula a produção de código e o consumo de código*/
let myPromise = new Promise(function(myResolve, myReject) {
  // "Producing Code" (May take some time)
  
    myResolve(); // when successful
    myReject();  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise)
  myPromise.then(
    function(value) { /* code if successful */ },
    function(error) { /* code if some error */ }
  );

/*** */
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);