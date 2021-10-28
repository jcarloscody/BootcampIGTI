import express, { Router } from 'express';

import ListaController from '../controllers/listas.controller.js';

const createRouter = express.Router();

createRouter.post("/listaModelos", ListaController.criarMarca)
createRouter.get("/listaModelos", ListaController.list)
createRouter.get("/maisModelos", ListaController.maximo)
createRouter.get("/menosModelos", ListaController.minimo)
createRouter.get("/listaMaisModelos/:x", ListaController.maiores)
createRouter.get("/listaMenosModelos/:x", ListaController.menores)
createRouter.get("/findBrand/:x", ListaController.find)


export default createRouter