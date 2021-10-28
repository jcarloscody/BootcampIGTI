import ListaRepository from '../repositories/listas.repository.js';

async function maximoLista() {
    return await ListaRepository.maxLista();
}

async function minimoLista() {
    return await ListaRepository.minLista();
}

async function maioresLista(x) {
    return await ListaRepository.maioresMarcas(x)
}

async function menoresLista(x) {
    return await ListaRepository.menoresMarcas(x)
}

async function findBrandLista(brand) {
    return await ListaRepository.findBrand(brand)
}

async function criar(corpo) {
    return await ListaRepository.listaoEscreve(corpo)
}

async function listaoLista() {
    return await ListaRepository.listao()
}

export default {
    maximoLista,
    minimoLista,
    maioresLista,
    menoresLista,
    findBrandLista,
    criar,
    listaoLista
}