import express from 'express';

import ListaRotas from './routes/listas.routes.js';

const app = new express();
global.fileName = "car-list.json"
app.use(express.json())
app.use("/marcas", ListaRotas);

app.listen(3000, () => {
    console.log("Started!")
})