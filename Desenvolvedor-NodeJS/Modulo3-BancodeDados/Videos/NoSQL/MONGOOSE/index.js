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

/**
 * npm i mondodb
 *
 * drive para conexao com o mongo
 */


/**mongoose
 *npm i mongoose --save
 * é uma biblioteca para modelagem de dados com o mongodb
 * é do tipo ODM - object data modem
 *
 * é um paralelo com sequelize do sql
 *
 */