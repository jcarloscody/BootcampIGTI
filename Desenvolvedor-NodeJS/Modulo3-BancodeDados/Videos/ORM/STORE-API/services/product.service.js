import productRepository from '../repositories/product.repository.js'
import supplierRpository from '../repositories/supplier.repository.js'
import SaleRepository from '../repositories/sale.repository.js'

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
    const sale = await SaleRepository.getSalesByProductId(id)
    if (sale.length > 0) {
        throw new Error("não é possivel excluir pq tem chave estrangeir")
    }
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