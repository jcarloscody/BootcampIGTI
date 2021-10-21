import express from 'express';

const motoRoutes = express.Router();


motoRoutes.post("/", (req, res)=>{
    res.send("estamos na moto")
})

motoRoutes.post("/dois", (req, res)=>{
    res.send("estamos na moto dois")
})

export {motoRoutes};