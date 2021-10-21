import express from 'express'
import winston from 'winston'

const app = express();

app.use(express.json());

const {combine, printf, label, timestamp } = winston.format;  //vc pode desmebrar para nao ficar repetindo

//formato de impressao 
const myFormat = printf(({level,  label, timestamp, message})=>{  
    return `${level} [${label}] ${timestamp}: ${message}`;
})

const logger = winston.createLogger({ //cria o log e passa como parametro um json
    level: 'silly', //com este nivel vai capturar todo tipo de log
    transports: [ //o transporte, para onde irá ser levado,
        new (winston.transports.Console), //para o console
        new (winston.transports.File)({filename: "my-log.log"})  //para o arquivo
    ],
    format: combine(
        label({label: "my-app"}),
        timestamp(),
        myFormat
    )
});

logger.error("Error log");
logger.warn("Warn log");
logger.info("Info log");
logger.verbose("Verbose log");
logger.debug("Debug log");
logger.silly("Silly log");
logger.log("info", "hello with parameter");

/**
 * error: 0
 * 
 */


app.listen(3000, ()=>{
    console.log("server iniciou")
})

