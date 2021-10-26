import express, { Router } from "express";
import { promises as fs } from 'fs';
import cors from 'cors';

import AccountController from "../controllers/account.controller.js";

const { readFile, writeFile } = fs;



const routerAccount = express.Router();

routerAccount.post("/", AccountController.createAccount)


routerAccount.get("/", cors(), async (req, res, next) => { //libberando o endpoint apenas
    try {
        const data = JSON.parse(await readFile(global.fileName))
        delete data.nextId;//mesmo sendo constante conseguimos excluir a sua propriedade, não estamos atribuindo nova propriedade
        res.send(data)
        logger.info(`GET /account `)
    } catch (error) {
        next(error)
    }
})


routerAccount.get("/:id", async (req, res, next) => {//liberando mais este endpoints
    try {
        const data = JSON.parse(await readFile("accounts.json"));
        const id = parseInt(req.params.id);
        const account = data.accounts.find(account => account.id === id)
        if (account) {
            res.send(account);
            logger.info(`GET /account/:${req.params.id} ${JSON.stringify(account)}`)
        } else {
            res.send(`Não temos o ID ${req.params.id} registrado no sistema`);
        }

    } catch (error) {
        next(error)
    }
})


routerAccount.delete("/:id", async (req, res, next) => {
    try {
        let data = JSON.parse(await readFile(global.fileName));
        let id = parseInt(req.params.id)
        let accountIndex = data.accounts.findIndex(account => account.id === id);
        //data.accounts = data.accounts.filter(account => account.id !== id);
        //await writeFile(global.fileName, JSON.stringify(data, null, 2))
        if (data.accounts[accountIndex]) {
            delete data.accounts[accountIndex];
            await writeFile(global.fileName, JSON.stringify(data, null, 2))
            res.send(data)
            logger.info(`DELETE /account:${req.params.id} ${JSON.stringify(account)}`)
        } else {
            res.send(`Não temos o ID ${req.params.id} registrado no sistema`);
        }
    } catch (error) {
        next(error)
    }

});

//method usado para atualizar o recurso de forma integral. 
routerAccount.put("/", async (req, res, next) => {
    try {
        let accountBody = req.body;
        if ((!accountBody.id || !accountBody.nome || !accountBody.balance == null)) {
            throw new Error("o ID, nome e o balance são itens obrigatorios")
        }

        let data = JSON.parse(await readFile(global.fileName))
        let accountIndex = data.accounts.findIndex((account) => account.id === accountBody.id)
        if (data.accounts[accountIndex]) {
            data.accounts[accountIndex].nome = accountBody.nome
            data.accounts[accountIndex].balance = accountBody.balance
            await writeFile(global.fileName, JSON.stringify(data, null, 2))
            res.send("atualizado com sucesso")
        } else {
            res.send("erro ID NAO ENCONTRADO")
            logger.info("registro ID NAO ENCONTRADO")
        }
    } catch (error) {
        next(error)
    }
})


//method para atualização parcial 
routerAccount.patch("/updateBalance", async (req, res, next) => {
    try {
        let accountBody = req.body;
        if ((!accountBody.id || !accountBody.balance == null)) {
            throw new Error("o ID e o balance são itens obrigatorios")
        }

        let data = JSON.parse(await readFile(global.fileName))
        let accountIndex = data.accounts.findIndex((account) => account.id === accountBody.id)
        let oldaccount = JSON.stringify(data.accounts[accountIndex]);
        if (data.accounts[accountIndex]) {
            data.accounts[accountIndex].balance = accountBody.balance
            await writeFile(global.fileName, JSON.stringify(data, null, 2))

        } else {
            res.send("erro ID NAO ENCONTRADO")
        }
        let da = oldaccount + JSON.stringify(data.accounts[accountIndex]);
        res.send(da)
    } catch (error) {
        next(error)
    }
})


routerAccount.use((erro, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${erro.message} `)

    res.status(400).send({ erro: erro.message })
})
export { routerAccount };