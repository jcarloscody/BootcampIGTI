//responsavel pela herança de propriedade em objetos

/**
 * Objetos possuemm propriedades próprias, mas tbm podem herdar propriedades de outro obj, o seu prototype
 * 
 * 
 */


 function Retangulo(alt, larg) {
    this.altura = alt;
    this.largura = larg;
    this.area = function(){
        return this.altura * this.largura
    }
    
}

var r1 = new Retangulo(3,4)
var r2 = new Retangulo(32,44)

console.log("igualdade")
console.log(r1.area === r2.area)


function RetanguloV2(alt, larg) {
    this.altura = alt;
    this.largura = larg;
    this.area = function(){
        return this.altura * this.largura
    }
    
}

RetanguloV2.prototype.area = function(){
    return this.altura * this.largura
}

var r3 = new RetanguloV2(3,4)
var r4 = new RetanguloV2(32,44)

console.log("igualdade")
console.log(r3.area() )