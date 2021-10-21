/*Definições de função JavaScript      */

function functionName(parameters) {
    // code to be executed
  }

  /*expresssao*/
  const x = function (a, b) {return a * b}; /*A função acima é na verdade uma função anônima (uma função sem um nome).*/
let z = x(4, 3);


/*Funções de auto-invocação 
Uma expressão de auto-invocação é chamada (iniciada) automaticamente, sem ser chamada.*/
(function () {
    let x = "Hello!!";  //  função de auto-chamada anônima (função sem nome)
})();


//Funções são objetos




/*Arrow Functions    Funções de seta*/
//sintaxe curta para escrever expressões de função.

const x = (x, y) => { return x * y };//não içada, não tem this








/*Parâmetros da função JavaScript*/
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
function (x, y = 2) {
    // function code
}


/*Invocando uma função JavaScript*/
function myFunction(a, b) {
    return a * b;
  }
  myFunction(10, 2);           // Will return 20
  window.myFunction(10, 2);    // Will also return 20

/*THIS*/
//O valor de this, quando usado em uma função, é o objeto que "possui" a funçãO

let x = myFunction();            // x will be the window object

function myFunction() {
  return this;//Quando uma função é chamada sem um objeto proprietário, o valor de this torna-se o objeto global.
}

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
  }
  
  // This will return [object Object] (the owner object)
  myObject.fullName();



  /*Invocando uma função com um construtor de função*/
  // This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  
  // This creates a new object
  const myObj = new myFunction("John", "Doe");
  
  // This will return "John"
  myObj.firstName;




  
  
  /*Com call(), um objeto pode usar um método pertencente a outro objeto*/
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  
  // This will return "John Doe":
person.fullName.call(person1);


const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person.fullName.call(person1, "Oslo", "Norway");

  /*https://www.w3schools.com/js/js_function_closures.asp*/
  