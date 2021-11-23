import express from 'express'
import cors from 'cors'
import winston from 'winston'

import clientsRouter from './routes/client.route.js'
import productRouter from './routes/product.route.js'
import salesRouter from './routes/sale.route.js'
import suppliersRouter from './routes/supplier.route.js'


//WINSTON
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${level}] ${level} ${message}`
})
global.logger = winston.createLogger({
    level: "silly", //silly, maior nivel
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "store-api.log" })
    ],
    format: combine(
        label({ label: "store-api" }),
        timestamp(),
        myFormat
    )
})


const app = express();

app.use(express.json())
app.use(cors())



app.use("/client", clientsRouter)
app.use("/product", productRouter)
app.use("/sale", salesRouter)
app.use("/supplier", suppliersRouter)

app.use((error, req, res) => {
    logger.error(`${req.method} ${req.baseUrl} ${error.message}`)
    res.status(400).send({ ERROR: error.message })
})
app.listen(3000, () => {
    console.log("API Started!")
})


/**biblioteca pg
 * npm i pg
 *
 * responsavel por conectar com o postgre
 */

/**
 * pool de conexao
 *
 * - acelera a conexao com o bd
 * - o bd tem um limite de conexoes que consegue manter de forma simultanea, ai entra a nocao de pool "piscina" de conexoes
 * então ele consegue gerenciar, ver quando é necesspario criar uma nova conexao ou se dar para aproveitar uma conexao ja criada
 */