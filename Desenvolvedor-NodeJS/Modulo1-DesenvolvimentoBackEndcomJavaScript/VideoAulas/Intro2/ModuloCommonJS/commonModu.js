//vamos criar um modulo

function soma(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

var variavel = "vou ser export";

//vamos fazer a importação de um objeto default, ou seja, um objeto como o todo. 
module.exports = {soma, sub, variavel};