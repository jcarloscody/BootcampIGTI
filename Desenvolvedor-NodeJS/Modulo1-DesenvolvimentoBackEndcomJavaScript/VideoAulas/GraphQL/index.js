//vamos usar o GraphQL -- npm i graphql --save     --  tbm usaremos o express-graphql   npm i express-graphql --save
import express from 'express';
import winston from 'winston';
import { routerAccount } from './routes/account.routes.js';
import { promises as fs } from 'fs';
import cors from 'cors'; //responsável por permitir que outros dominios consuma seus recursos
import swagger from 'swagger-ui-express'
import { swaggerDocument } from './doc.js';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import AccountService from './services/account.service.js';
import schemaGraph from './schema/index.js';


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

/*const schemaGraph = buildSchema(`
    type Account {
        id: Int
        nome: String
        balance: Float
    }
    input AccountInput {
        id: Int
        nome: String
        balance: Float
    }
    type Query {
        getAccounts: [Account]
        getAccount(id: Int): Account
    }
    type Mutation {
        createAccount(account: AccountInput): Account
        deleteAccount(id: Int): String
        updateAccount(id: Int, nome: String, balance: Float): String
    }
`)

const rootGraph = {
    getAccounts: () => AccountService.getAccounts(),
    getAccount(args) {
        return AccountService.getAccount(args.id)
    },
    createAccount({ account }) {
        return AccountService.createAccount(account)
    },
    deleteAccount(args) {
        return AccountService.deleteAccount(args.id)
    },
    updateAccount(args) {
        return AccountService.updateAccount(args.id, args.nome, args.balance)
    }
}*/

//instanciando o server 
const app = express();
app.use(express.json())
app.use(express.static("public"))
app.use(cors()); //libera todos os endpoints
app.use("/doc", swagger.serve, swagger.setup(swaggerDocument))

app.use("/account", routerAccount);

app.use("/graphql", graphqlHTTP({
    schema: schemaGraph,
    //rootValue: rootGraph,
    graphiql: true //tras uma interface
}))


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

/**
 * QUERY DO GRAPHQL
 *
 {
  getAccount(id: 1){
    id
    nome
    balance
  }
 getAccounts{
    id
    nome
    balance
  }
}

MUTATION

  mutation {
    createAccount(account: {
      nome: "meu nome é Carlos"
      balance: 69167671676
    }){
      id
      nome
      balance
    }
  }


    mutation {
    updateAccount(
      id: 1
      nome: "meu nome se chamava Marcos Aurelio"
      balance: 0)
  }


  mutation {


    deleteAccount(
      id: 1
     )
  }

 *
 */



