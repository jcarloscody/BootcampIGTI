import express from 'express';
import { promises as fs } from 'fs';
import winston from 'winston';
import cors from 'cors'; //responsável por permitir que outros dominios consuma seus recursos
import swagger from 'swagger-ui-express'
import { swaggerDocument } from './doc.js';


import { routerAccount } from './routes/account.routes.js';

const { readFile, writeFile } = fs

global.fileName = "accounts.json";

//Fazendo o logger
const { label, timestamp, combine, printf } = winston.format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} --${label}-- ${level}: ${message}`
})

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "my-bank-api.log" })
    ],
    format: combine(
        label({ label: "my-bank-api" }),
        timestamp(),
        myFormat
    )
})

//instanciando o server 
const app = express();
app.use(express.json())
app.use(express.static("public"))
//app.use(cors()); //libera todos os endpoints
app.use("/doc", swagger.serve, swagger.setup(swaggerDocument))

app.use("/account", routerAccount);


app.listen(3000, async () => {


    try {
        await readFile(global.fileName);
        logger.info("API Started!")
    } catch (error) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }

        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("API Started and File created!")

        }).catch((erro) => {
            logger.error(erro)
        });
    }

    console.log("API Started!")
})

/**
 * cors - compartilhamento de recursos de origem cruzadas. é uma questao de seguranca que temos em paginas web
 * que quando vc fornece uma api por default somente paginas que estejam hospedadas juntamente a esta api que podem
 * conseguir acessar ela.. EM SUMA uma api de outro dominio esta quer consumir os recurso da nossa api que esta em dominio diferente
 * por padrão será bloqueado, para liberar usamos a biblioteca cors
 */

/**DOCUMENTAÇÃO
 * editor.swagger.io
 *
 * bibliboteca: npm install swagger-ui-express
 */