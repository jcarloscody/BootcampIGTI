import express from 'express';
import { promises as fs } from 'fs';
import winston from 'winston';
import cors from 'cors'; //responsável por permitir que outros dominios consuma seus recursos
import swagger from 'swagger-ui-express';
import { swaggerDocument } from './doc.js';
import jwt from 'jsonwebtoken';
import router from './routes/user.routes.js';
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
app.use(cors()); //libera todos os endpoints
app.use("/doc", swagger.serve, swagger.setup(swaggerDocument))



function permissao(...allowed) {
    const isAllowed = role => allowed.indexOf(role) > -1

    return (req, res, next) => {

        const authHeader = req.headers['authorization'] // padrao do cabeçalho do jwt é - Bearer aosfinoi23i324onvowin4

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ message: "Denied Access" })
            return;
        }

        const jwtToken = authHeader.substring(7, authHeader.length)

        jwt.verify(jwtToken, 'secretKey', function (err, decoded) {
            if (err) {
                res.status(401).json({ message: "Invalid token" })
            }

            if (isAllowed(decoded.role)) {
                next()
            } else {
                res.status(403).send("role not allowed")
            }
        })
    }
}

app.use("/user", router)
app.use("/account", permissao('admin', 'perfil1'), routerAccount);


app.listen(3001, async () => {


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
