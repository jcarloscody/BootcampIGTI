
import supplierService from '../services/supplier.service.js'

async function createSupplier(request, response, next) {
    try {
        let supplier = request.body;
        if (!supplier.nome || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("Name, cnpj, Phone, email, Address são obrigatórios")
        }
        response.send(await supplierService.createSupplier(supplier))
        logger.info(`POST ${JSON.stringify(supplier, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

async function getSuppliers(request, response, next) {
    try {
        response.send(await supplierService.getSuppliers())
        logger.info(`GET /supplier`)
    } catch (error) {
        next(error)
    }
}


async function getSupplier(request, response, next) {
    try {
        response.send(await supplierService.getSupplier(request.params.id))
        logger.info(`GET /supplier`)
    } catch (error) {
        next(error)
    }
}

async function deleteSupplier(request, response, next) {
    try {
        await supplierService.deleteSupplier(request.params.id)
        response.send(`ok - `)
        logger.info(`GET /supplier`)
    } catch (error) {
        next(error)
    }
}

async function updateSupplier(request, response, next) {
    try {
        let supplier = request.body;
        if (!supplier.supplier_id || !supplier.nome || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("ID, Name, cnpj, Phone, email, Address são obrigatórios")
        }
        response.send(await supplierService.updateSupplier(supplier))
        logger.info(`UPDATE ${JSON.stringify(supplier, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}