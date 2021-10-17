//tipos primitivos
var numberr = 5.6;
var stringg = 'asdas';
var booll = true;


//objetos
var obj = {
    matric: 12412,
    nome: 'josue'
};

console.log(obj.nome);

obj.data = new Date();

console.log(obj.data);

delete obj.data;

console.log(obj.data);

var obj2 = obj; //copia a referencia e nao o valor

//null <> undefined

//Arrays
var alunos = [1,2,3,4,5,6];
console.log(alunos[0])


//operadores lógicos
// ! && ||
//operadores aritméticos
//igualdade == != === !==




//funcoes
function fund(params) {
    name()
    function name() {
        console.log('helo')
    }
}
fund()


var a = false
if(a){

}else {
    console.log('nao')
}

var a = 2<2 ? 'menor' : (1==2) ? 'igual' : 'maior';
console.log(a)

switch (key) {
    case value:
        
        break;

    default:
        break;
}



while (condition) {
    
}


do {
    
} while (condition);



for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}


