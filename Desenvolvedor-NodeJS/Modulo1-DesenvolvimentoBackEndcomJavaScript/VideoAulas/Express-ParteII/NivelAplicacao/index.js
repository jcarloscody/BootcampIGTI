import express from 'express';
import { Logger } from './Logger.js';

const app = express(); //estamos no nivel de aplicação pq estamos associadno o express a uma variavel, estamos fazendo uma instancia do express

app.use(express.json()) //quando usamos o use, estamos pedindo que determinado codigo seja usado sempre independente de quem esteja passando por ali

app.use((req, res, next) => {
    console.log(new Date());
    next()
})

app.get("/", (req, res) => {
    Logger.info("estamos aquiiiiiiiiii")
    res.send("çasdfaso")
})

app.listen(3000, () => {
    console.log("iniciou o servidor")
    Logger.info("servidor subiu")
})