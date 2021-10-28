import { promises as fs } from 'fs'


const { readFile, writeFile } = fs

async function maxLista() {
    let dados = JSON.parse(await readFile(global.fileName))

    let dadosExtraidoM = dados.map((value) => {
        return value.models.length
    })

    /*let dadosExtraido = {}
    dados.forEach(element => {
        dadosExtraido.element.brand
    });*/

    let dadosExtraidoI = dados.map((value, index) => {
        return value.brand
    })

    let maior = -1;
    let i = 0
    let Marcas = []
    for (let index = 0; index < dadosExtraidoM.length; index++) {
        if (dadosExtraidoM[index] > maior) {
            maior = dadosExtraidoM[index]
            i = index
            Marcas = []
            Marcas.push(`Marca ${dadosExtraidoI[i]}`)
        } else if ((dadosExtraidoM[index] == maior)) {
            Marcas.push(`Marca ${dadosExtraidoI[index]}`)
        }

    }

    //let dadosIndex = dados.findIndex(el => el)

    return Marcas;
}

async function minLista() {
    let dados = JSON.parse(await readFile(global.fileName))

    let dadosExtraidoM = dados.map((value) => {
        return value.models.length
    })
    /*let dadosExtraido = {}
    dados.forEach(element => {
        dadosExtraido.element.brand
    });*/

    let dadosExtraidoI = dados.map((value, index) => {
        return value.brand
    })

    let Menor = 1e100000;
    let i = 0
    let Marcas = []
    for (let index = 0; index < dadosExtraidoM.length; index++) {
        if (dadosExtraidoM[index] < Menor) {
            Menor = dadosExtraidoM[index]
            i = index
            Marcas = []
            Marcas.push(`Marca ${dadosExtraidoI[i]}`)
        } else if ((dadosExtraidoM[index] == Menor)) {
            Marcas.push(`Marca ${dadosExtraidoI[index]}`)
        }

    }

    //let dadosIndex = dados.findIndex(el => el)

    return Marcas
}


async function maioresMarcas(x) {
    let dados = JSON.parse(await readFile(global.fileName))
    let quantidade = parseInt(x)

    let dadosExtraidoM = dados.map((value) => {
        return value.models.length
    })

    let dadosExtraidoI = dados.map((value) => {
        return value.brand
    })


    let conj = {}
    let conjunto = []
    for (let i = 0; i < dadosExtraidoI.length; i++) {
        conj = {}
        conj["brand"] = dadosExtraidoI[i]
        conj["models"] = dadosExtraidoM[i]
        conjunto.push(conj)
    }

    conjunto.sort((models1, models2) => {
        return models2.models - models1.models
    })

    if (quantidade > conjunto.length) {
        return `A quantidade requisitada é maior que a persistência`
    }

    let conjuntoAmostral = []
    for (let i = 0; i < quantidade; i++) {
        conjuntoAmostral.push(`Marca ${conjunto[i].brand} - ${conjunto[i].models}`)
    }

    return conjuntoAmostral
}

async function menoresMarcas(x) {
    let dados = JSON.parse(await readFile(global.fileName))
    let quantidade = parseInt(x)

    let dadosExtraidoM = dados.map((value) => {
        return value.models.length
    })

    let dadosExtraidoI = dados.map((value) => {
        return value.brand
    })


    let conj = {}
    let conjunto = []
    for (let i = 0; i < dadosExtraidoI.length; i++) {
        conj = {}
        conj["brand"] = dadosExtraidoI[i]
        conj["models"] = dadosExtraidoM[i]
        conjunto.push(conj)
    }

    conjunto.sort((models1, models2) => {
        return models1.models - models2.models
    })

    if (quantidade > conjunto.length) {
        return `A quantidade requisitada é maior que a persistência`
    }

    let conjuntoAmostral = {}
    let conjuntoAmostralUm = []
    for (let i = 0; i < quantidade; i++) {
        conjuntoAmostral = {}
        conjuntoAmostral["brand"] = conjunto[i].brand
        conjuntoAmostral["models"] = conjunto[i].models
        conjuntoAmostralUm.push(conjuntoAmostral)
    }

    conjuntoAmostralUm.sort((a, b) => {
        let x = a.brand.toLowerCase();
        let y = b.brand.toLowerCase();
        if (a.models == b.models) {
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
        }
    })

    let conjuntoAmostralFinal = []
    for (let i = 0; i < quantidade; i++) {
        conjuntoAmostralFinal.push(`Marca ${conjuntoAmostralUm[i].brand} - ${conjuntoAmostralUm[i].models}`)
    }
    return conjuntoAmostralFinal
}


async function findBrand(brand) {
    let dados = JSON.parse(await readFile(global.fileName))
    let nome = String(brand.toLowerCase())

    let retorno = false
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].brand.toLowerCase() == nome) {
            retorno = true
        }

    }
    if (retorno) {
        let conjunto = dados.filter(el => {

            return el.brand.toLowerCase() == nome

        })
        console.log()


        let modelos = []
        for (let i = 0; i < conjunto[0].models.length; i++) {
            modelos.push(`Modelo ${conjunto[0].models[i]}`)

        }

        console.log(modelos)
        retorno = false
        return modelos

    } else {
        return []
    }
}

async function listaoEscreve(corpo) {
    let dados = JSON.parse(await readFile(global.fileName))

    let obj = {}
    obj["brand"] = corpo.brand
    obj["models"] = corpo.models

    dados.push(obj)

    await writeFile(global.fileName, JSON.stringify(dados, null, 2))

    return "sucesso"
}

async function listao() {
    let dados = JSON.parse(await readFile(global.fileName))

    return dados
}


export default {
    maxLista,
    minLista,
    maioresMarcas,
    menoresMarcas,
    findBrand,
    listaoEscreve,
    listao
}