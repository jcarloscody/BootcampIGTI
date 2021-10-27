import AccountServices from '../services/account.service.js'


async function createAccount(req, res, next) {
    try {
        let account = req.body
        if ((!account.nome || !account.balance == null)) {
            throw new Error("o nome e o balance são itens obrigatorios")
        }

        account = await AccountServices.createAccount(account)

        res.send(account)
        logger.info(`POST /account ${JSON.stringify(account)}`)
    } catch (error) {
        next(error)
    }
}

async function getAccounts(req, res, next) {
    try {
        res.send(await AccountServices.getAccounts())
        logger.info(`GET /account `)
    } catch (error) {
        next(error)
    }
}

async function getAccount(req, res, next) {
    try {
        res.send(await AccountServices.getAccount(req.params.id));
    } catch (error) {
        next(error)
    }
}


async function deleteAccount(req, res, next) {
    try {
        res.send(await AccountServices.deleteAccount(req.params.id));
    } catch (error) {
        next(error)
    }
}

async function updateAccount(req, res, next) {
    try {
        let accountBody = req.body;
        if ((!accountBody.id || !accountBody.nome || !accountBody.balance == null)) {
            throw new Error("o ID, nome e o balance são itens obrigatorios")
        }
        res.send(await AccountServices.updateAccount(accountBody.id, accountBody.nome, accountBody.balance))
    } catch (error) {
        next(error)
    }
}


async function updateBalance(req, res, next) {
    try {
        let accountBody = req.body;
        if ((!accountBody.id || !accountBody.balance == null)) {
            throw new Error("o ID e o balance são itens obrigatorios")
        }
        res.send(await AccountServices.updateBalance(accountBody.id, accountBody.balance))
    } catch (error) {
        next(error)
    }
}




export default {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateBalance
};