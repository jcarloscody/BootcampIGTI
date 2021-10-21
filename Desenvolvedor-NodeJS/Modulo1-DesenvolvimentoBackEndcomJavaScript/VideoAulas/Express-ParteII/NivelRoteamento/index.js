import express from 'express';
import routerCarros from './carroRoutes.js';
import { motoRoutes } from './motoRoutes.js';

const app = express(); //estamos no nivel de aplicação pq estamos associadno o express a uma variavel, estamos fazendo uma instancia do express

app.use(express.json()) //quando usamos o use, estamos pedindo que determinado codigo seja usado sempre independente de quem esteja passando por ali

app.use("/carros", routerCarros);

app.use("/motos", motoRoutes);

app.listen(3000, ()=>{
    console.log("servidor iniciado")
})