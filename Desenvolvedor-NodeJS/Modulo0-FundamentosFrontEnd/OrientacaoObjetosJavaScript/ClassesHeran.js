class Retangulo{
    constructor(alt){
        this.altura = alt;
    }

    area(){

    }
}

class Qua extends Retangulo{
    constructor(altura, largura){
        super(altura)
        this.largura = largura;
    }
}