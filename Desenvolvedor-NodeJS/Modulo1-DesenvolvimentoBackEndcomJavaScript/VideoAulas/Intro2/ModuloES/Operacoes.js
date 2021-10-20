//vamos criar um modulo

function soma(a,b) {
    return a + b;
}

function sub(a,b) {
    return a - b;
}

var variavel = "vou ser export";

//vamos fazer a importação de um objeto default, ou seja, um objeto como o todo. este é o formato mais atual para exportar
export default {soma, sub, variavel};
//ATENÇÃO : PARA FAZER ISTO VC DEVE COLOCAR NO PACKAGE.JSON O TYPE:"MODULE" OU TROCAR A EXTENÇÃO PARA .mjs