import express, { Router } from "express";
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;



const routerAccount = express.Router();

routerAccount.post("/", async (req, res, next) => {

    try {
        let account = req.body
        const data = JSON.parse(await readFile(global.fileName))
        account = { id: data.nextId, ...account }
        data.nextId++;
        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(account)
    } catch (error) {
        next(error)
    }
})


routerAccount.get("/", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile(global.fileName))
        delete data.nextId;//mesmo sendo constante conseguimos excluir a sua propriedade, não estamos atribuindo nova propriedade
        res.send(data)
    } catch (error) {
        next(error)
    }
})


routerAccount.get("/:id", async (req, res, next) => {
    try {
        const data = JSON.parse(await readFile("accounts.json"));
        const id = parseInt(req.params.id);
        const account = data.accounts.find(account => account.id === id)
        if (account) {
            res.send(account);
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
        let data = JSON.parse(await readFile(global.fileName))
        let accountIndex = data.accounts.findIndex((account) => account.id === accountBody.id)
        if (data.accounts[accountIndex]) {
            data.accounts[accountIndex] = accountBody
            await writeFile(global.fileName, JSON.stringify(data, null, 2))
            res.send("atualizado com sucesso")
        } else {
            res.send("erro ID NAO ENCONTRADO")
        }
    } catch (error) {
        next(error)
    }
})


//method para atualização parcial 
routerAccount.patch("/updateBalance", async (req, res, next) => {
    try {
        let accountBody = req.body;
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
    res.status(400).send({ erro: erro.message })
})
export { routerAccount };