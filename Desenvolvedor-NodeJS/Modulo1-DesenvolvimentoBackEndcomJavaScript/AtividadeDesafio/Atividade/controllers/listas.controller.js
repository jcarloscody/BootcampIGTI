import ListaServices from "../services/listas.service.js"

async function maximo(req, res) {

    res.send(await ListaServices.maximoLista())
}

async function minimo(req, res) {
    res.send(await ListaServices.minimoLista())
}

async function maiores(req, res) {
    res.send(await ListaServices.maioresLista(req.params.x))
}

async function menores(req, res) {
    res.send(await ListaServices.menoresLista(req.params.x))
}

async function find(req, res) {
    res.send(await ListaServices.findBrandLista(req.params.x))
}

async function criarMarca(req, res) {
    let corpo = req.body

    res.send(await ListaServices.criar(corpo))

}

async function list(req, res) {
    res.send(await ListaServices.listaoLista())

}

export default {
    maximo,
    minimo,
    maiores,
    menores,
    find,
    criarMarca,
    list
}