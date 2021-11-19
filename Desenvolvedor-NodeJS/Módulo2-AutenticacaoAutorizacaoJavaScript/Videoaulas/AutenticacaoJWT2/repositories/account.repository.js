import { promises as fs } from 'fs';


const { readFile, writeFile } = fs;


async function getAccounts() {
    const data = JSON.parse(await readFile(global.fileName))
    return data.accounts
}

async function getAccount(id) {
    const accounts = await getAccounts()
    const account = accounts.find(account => account.id === parseInt(id))
    if (account) {
        logger.info(`GET /account/:${parseInt(id)} ${JSON.stringify(account)}`)
        return account;
    } else {
        logger.info(`GET /account/:${parseInt(id)} --- Não temos o ID ${parseInt(id)} registrado no sistema `)
        return `Não temos o ID ${parseInt(id)} registrado no sistema`;
    }
}


async function insertAccount(account) {
    const data = JSON.parse(await readFile(global.fileName))
    account = {
        id: data.nextId,
        nome: account.nome,
        balance: account.balance
    }
    data.nextId++;
    data.accounts.push(account);
    await writeFile(global.fileName, JSON.stringify(data, null, 2))
    return account;
}


async function deleteAccount(id) {
    let data = JSON.parse(await readFile(global.fileName));

    let accountIndexDeleted = data.accounts.findIndex(account => account.id === parseInt(id))
    let accountDeleted = data.accounts[accountIndexDeleted];

    let accounts = data.accounts.filter(account => account.id !== parseInt(id));

    if (accounts != -1) {
        data.accounts = accounts
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        logger.info(`DELETE /account:${parseInt(id)} ${JSON.stringify(accountDeleted)}`)
        return data.accounts;
    } else {
        logger.info(`Não temos o ID ${parseInt(id)} registrado no sistema`)
        return `Não temos o ID ${parseInt(id)} registrado no sistema`
    }
}

async function updateAccount(id, nome, balance) {
    let data = JSON.parse(await readFile(global.fileName))
    let accountIndex = data.accounts.findIndex((account) => account.id === id)
    if (data.accounts[accountIndex]) {
        data.accounts[accountIndex].nome = nome
        data.accounts[accountIndex].balance = balance
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        logger.info("atualizado com sucesso")
        return "atualizado com sucesso"
    } else {
        logger.info("registro ID NAO ENCONTRADO")
        return "ID NAO ENCONTRADO";
    }
}

async function updateBalance(id, balance) { //por enquanto nao estou usando
    let data = JSON.parse(await readFile(global.fileName))

    let accountIndex = data.accounts.findIndex((account) => account.id === id)

    let oldaccount = JSON.stringify(data.accounts[accountIndex]);

    if (data.accounts[accountIndex]) {
        data.accounts[accountIndex].balance = balance
        await writeFile(global.fileName, JSON.stringify(data, null, 2))
        logger.info(`atualizado com sucesso o balance- ${oldaccount + JSON.stringify(data.accounts[accountIndex])}`)
        return `atualizado com sucesso o balance- ${oldaccount + JSON.stringify(data.accounts[accountIndex])}`
    } else {
        logger.info("ID nao encontrado - atualizacoa do updateBalance")
        return "ID NAO ENCONTRADO"
    }
}

export default {
    getAccounts,
    insertAccount,
    getAccount,
    deleteAccount,
    updateAccount,
    updateBalance

}