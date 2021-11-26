import clientRepository from '../repositories/supplier.repository.js'

async function createSupplier(client) {
    return await clientRepository.insertSupplier(client)
}

async function getSuppliers() {
    return await clientRepository.getSuppliers()
}

async function getSupplier(id) {
    return await clientRepository.getSupplier(id)
}

async function deleteSupplier(id) {
    return await clientRepository.deleteSupplier(id)
}

async function updateSupplier(client) {
    return await clientRepository.updateSupplier(client)
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}