function Retangulo(alt, larg) {
    this.altura = alt;
    this.largura = larg;
    this.area = function(){
        return this.altura * this.largura
    }
    this.areaFora = areaDoL;
}


var r1 = new Retangulo(10,1)

console.log(r1)


var objetoLiteral = {altura: 10, largura: 11}
 
 console.log(objetoLiteral)

function areaDoL() {
    return this.altura * this.largura
}

console.log("-----" + r1.areaFora())
