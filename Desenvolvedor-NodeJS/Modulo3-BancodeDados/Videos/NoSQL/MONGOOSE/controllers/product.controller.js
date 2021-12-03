
import productService from '../services/product.service.js'



async function getProduct(request, response, next) {
    try {
        response.send(await productService.getProduct(request.params.id))
        logger.info(`GET /product`)
    } catch (error) {
        next(error)
    }
}



async function createProductInfo(req, res, next) {
    try {
        let productInfo = req.body

        if (!productInfo.productId) {
            throw new Error("ID obrigatorio")
        }
        await productService.saveProductInfo(productInfo)
        res.end()
        logger.info("inseriu no nosql")
    } catch (e) {
        next(e)
    }
}

async function updateProductInfo(req, res, next) {
    try {
        let productInfo = req.body

        if (!productInfo.productId) {
            throw new Error("ID obrigatorio")
        }
        await productService.updateProductInfo(productInfo)
        res.end()
        logger.info("update no nosql")
    } catch (e) {
        next(e)
    }
}


async function createReview(req, res, next) {
    try {
        let params = req.body

        if (!params.productId || !params.review) {
            throw new Error("ID e review obrigatorio")
        }
        await productService.createReview(params.review, params.productId)
        res.end()
        logger.info("update no nosql")
    } catch (e) {
        next(e)
    }
}


async function deleteReview(req, res, next) {
    try {
        await productService.deleteReview(req.params.id, req.params.index)
        res.end()
        logger.info("update no nosql")
    } catch (e) {
        next(e)
    }
}

async function findAll(req, res, next) {
    try {
        res.send(await productService.findAll())
        logger.info("update no nosql")
    } catch (e) {
        next(e)
    }
}


async function deleteProductInfo(req, res, next) {
    try {
        await productService.deleteProductInfo(req.params.id)
        res.end()
        logger.info("update no nosql")
    } catch (e) {
        next(e)
    }
}

export default {
    getProduct,
    createProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}