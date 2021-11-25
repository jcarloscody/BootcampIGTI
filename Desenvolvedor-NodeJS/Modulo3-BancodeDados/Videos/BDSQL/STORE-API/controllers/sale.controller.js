
import saleService from '../services/sale.service.js'

async function createSale(request, response, next) {

    try {
        let sale = request.body;

        if (!sale.value || !sale.date || !sale.client_id || !sale.product_id) {
            throw new Error("!sale.value || !sale.date || !sale.client_id || !sale.product_id são obrigatórios")
        }


        response.send(await saleService.createSale(sale))
        logger.info(`POST ${JSON.stringify(sale, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

async function getSales(request, response, next) {
    try {
        response.send(await saleService.getSales(request.query.product_id))
        logger.info(`GET /sale`)
    } catch (error) {
        next(error)
    }
}


async function getSale(request, response, next) {
    try {
        response.send(await saleService.getSale(request.params.id))
        logger.info(`GET /sale`)
    } catch (error) {
        next(error)
    }
}

async function deleteSale(request, response, next) {
    try {
        await saleService.deleteSale(request.params.id)
        response.send(`ok - `)
        logger.info(`GET /sale`)
    } catch (error) {
        next(error)
    }
}

async function updateSale(request, response, next) {
    try {
        let sale = request.body;
        if (!sale.value || !sale.date || !sale.client_id || !sale.product_id || !sale.sale_id) {
            throw new Error("ID, Name, CPF, Phone, email, Address são obrigatórios")
        }
        response.send(await saleService.updateSale(sale))
        logger.info(`UPDATE ${JSON.stringify(sale, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}