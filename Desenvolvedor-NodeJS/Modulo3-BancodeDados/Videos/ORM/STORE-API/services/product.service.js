import productRepository from '../repositories/product.repository.js'
import supplierRpository from '../repositories/supplier.repository.js'

async function createProduct(client) {
    if (await supplierRpository.getSupplier(client.suplier_id)) {
        return await productRepository.insertProduct(client)
    }
    throw new Error("codigo referente ao fornecedor nao existe")
}

async function getProducts() {
    return await productRepository.getProducts()
}

async function getProduct(id) {
    return await productRepository.getProduct(id)
}

async function deleteProduct(id) {
    return await productRepository.deleteProduct(id)
}

async function updateProduct(client) {
    if (await supplierRpository.getSupplier(client.suplier_id)) {
        return await productRepository.updateProduct(client)
    }
    throw new Error("codigo referente ao fornecedor nao existe")
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}