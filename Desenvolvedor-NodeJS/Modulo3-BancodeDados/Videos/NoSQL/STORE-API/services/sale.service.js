import saleRepository from '../repositories/sale.repository.js'
import clientRepository from '../repositories/client.repository.js'
import productRepository from '../repositories/product.repository.js'


async function createSale(sale) {
    const product = await productRepository.getProduct(sale.productId);
    if (await clientRepository.getClient(sale.clientId) && product) {
        if (product.stock > 0) {
            sale = await saleRepository.insertSale(sale)
            product.stock--
            await productRepository.updateProduct(product)
            return sale
        } else {
            throw new Error(`${product.description} está com estoque vazio`)
        }

    }
    throw new Error("id de client e product inexistente")
}

async function getSales(productId, supplierId) {
    if (productId) {
        return await saleRepository.getSalesByProductId(productId)
    }

    if (supplierId) {
        return await saleRepository.getSalesBySupplierId(supplierId)
    }

    return await saleRepository.getSales()
}

async function getSale(id) {
    return await saleRepository.getSale(id)
}

async function deleteSale(id) {
    const sale = await saleRepository.getSale(id)
    if (sale) {
        const product = await productRepository.getProduct(sale.productId)
        await saleRepository.deleteSale(id)
        product.stock++
        await productRepository.updateProduct(product)
    } else {
        throw new Error("O id da sale nao existe")
    }
    return await saleRepository.deleteSale(id)
}

async function updateSale(sale) {
    if (await clientRepository.getClient(sale.clientId) && await productRepository.getProduct(sale.productId)) {
        return await saleRepository.updateSale(sale)
    }
    throw new Error("id de client e product inexistente")

}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}