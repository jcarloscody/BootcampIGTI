import express from 'express';
import { promises as fs } from 'fs';

import { routerAccount } from './routes/account.js';

const { readFile, writeFile } = fs

global.fileName = "accounts.json";


const app = express();
app.use(express.json())

app.use("/account", routerAccount);


app.listen(3000, async () => {


    try {
        await readFile(global.fileName)
    } catch (error) {
        const initialJson = {
            nextId: 1,
            accounts: []
        }

        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            console.log("API Started and File created!");
        }).catch((erro) => {
            console.log("API Started and File NOT created!")
        });
    }

    console.log("API Started!")
})