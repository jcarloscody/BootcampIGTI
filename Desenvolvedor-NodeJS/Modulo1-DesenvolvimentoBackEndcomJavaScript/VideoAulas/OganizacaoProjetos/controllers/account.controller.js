import { promises as fs } from 'fs';

const { writeFile, readFile } = fs;

async function createAccount(req, res, next) {
    try {
        let account = req.body
        if ((!account.nome || !account.balance == null)) {
            throw new Error("o nome e o balance são itens obrigatorios")
        }

        const data = JSON.parse(await readFile(global.fileName))
        account = {
            id: data.nextId,
            nome: account.name,
            balance: account.balance
        }
        data.nextId++;
        data.accounts.push(account);
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        res.send(account)
        logger.info(`POST /account ${JSON.stringify(account)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createAccount
};