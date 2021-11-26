
import productService from '../services/product.service.js'

async function createProduct(request, response, next) {
    try {
        let product = request.body;
        if (!product.name || !product.description || !product.value || !product.stock || !product.suplier_id) {
            throw new Error("Name, stock, description, value, suplier_id são obrigatórios")
        }
        response.send(await productService.createProduct(product))
        logger.info(`POST ${JSON.stringify(product, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

async function getProducts(request, response, next) {
    try {
        response.send(await productService.getProducts())
        logger.info(`GET /product`)
    } catch (error) {
        next(error)
    }
}


async function getProduct(request, response, next) {
    try {
        response.send(await productService.getProduct(request.params.id))
        logger.info(`GET /product`)
    } catch (error) {
        next(error)
    }
}

async function deleteProduct(request, response, next) {
    try {
        await productService.deleteProduct(request.params.id)
        response.send(`ok - `)
        logger.info(`GET /product`)
    } catch (error) {
        next(error)
    }
}

async function updateProduct(request, response, next) {
    try {
        let product = request.body;
        if (!product.product_id || !product.name || !product.description || !product.value || !product.stock || !product.suplier_id) {
            throw new Error("ID, Name, description, value, stock, suplier_id são obrigatórios")
        }
        response.send(await productService.updateProduct(product))
        logger.info(`UPDATE ${JSON.stringify(product, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}