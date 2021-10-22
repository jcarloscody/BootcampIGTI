import express, { Router } from "express";
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;



const routerAccount = express.Router();

routerAccount.post("/", async (req, res) => {

    try {
        let account = req.body
        const data = JSON.parse(await readFile(global.fileName))
        account = { id: data.nextId, ...account }
        data.nextId++;
        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(account)
    } catch (error) {
        res.status(400).send(error.message)
    }
})


routerAccount.get("/", async (req, res) => {
    try {
        const data = JSON.parse(await readFile(global.fileName))
        delete data.nextId;//mesmo sendo constante conseguimos excluir a sua propriedade, não estamos atribuindo nova propriedade
        res.send(data)
    } catch (error) {
        res.status(400).send("erro no processamento ", error.message)
    }
})


routerAccount.get("/:id", async (req, res) => {
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
        res.status(500).send("erro no processamento!")
    }
})


routerAccount.delete("/:id", async (req, res) => {
    try {
        let data = JSON.parse(await readFile(global.fileName));
        let id = parseInt(req.params.id)
        let accountIndex = data.accounts.findIndex(account => account.id === id);
        //data.accounts = data.accounts.filter(account => account.id !== id);
        if (data.accounts[accountIndex]) {
            delete data.accounts[accountIndex];
            await writeFile(global.fileName, JSON.stringify(data, null, 2))
            res.send(data)
        } else {
            res.send(`Não temos o ID ${req.params.id} registrado no sistema`);
        }
    } catch (error) {
        res.send("erro no processamento")
    }

})

export { routerAccount };