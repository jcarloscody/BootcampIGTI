import { promises as fs } from 'fs'
const { readFile, writeFile } = fs

import AccountRepository from '../repositories/account.repository.js'

async function createAccount(account) {
    return await AccountRepository.insertAccount(account)
}

async function getAccounts() {
    return await AccountRepository.getAccounts();
}


async function getAccount(id) {
    return await AccountRepository.getAccount(id)
}


async function deleteAccount(id) {
    return AccountRepository.deleteAccount(id)
}


async function updateAccount(id, nome, balance) {
    return AccountRepository.updateAccount(id, nome, balance)
}


async function updateBalance(id, balance) {
    let account = await AccountRepository.getAccount(id)
    account.balance = balance
    console.log(account)
    return await AccountRepository.updateAccount(account.id, account.nome, account.balance)
    //return AccountRepository.updateBalance(id, balance)
}




export default {
    createAccount,
    getAccounts,
    getAccount,
    deleteAccount,
    updateAccount,
    updateBalance
}