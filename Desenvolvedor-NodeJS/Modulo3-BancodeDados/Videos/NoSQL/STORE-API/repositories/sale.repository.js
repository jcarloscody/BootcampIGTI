import Sale from '../models/sale.model.js'
import Product from '../models/product.model.js'
import Client from '../models/client.model.js'

async function insertSale(sale) {
    try {
        return await Sale.create(sale)
    } catch (error) {
        throw error
    }
}

async function getSales() {
    try {
        return await Sale.findAll({
            include: [
                {
                    model: Product
                },
                {
                    model: Client
                }
            ]
        });
    } catch (error) {
        throw error
    }
}

async function getSalesByProductId(productId) {
    try { //sale?productId=1
        return await Sale.findAll({
            where: {
                productId: productId
            },
            include: {
                model: Client
            }
        })
    } catch (error) {
        throw error
    }
}

async function getSale(id) {
    try {
        return await Sale.findByPk(id)
    } catch (error) {
        throw error
    }
}

//SELECT * FROM sales s INNER JOIN products p ON (s.product_id = p.product_id) WHERE p.supplier_id =?
async function getSalesBySupplierId(supplierId) {
    try {
        return await Sale.findAll({
            include: [
                {
                    model: Product,
                    where: {
                        productId: supplierId
                    }
                }
            ]
        })
    } catch (error) {
        throw error
    }
}

async function deleteSale(id) {
    try {
        await Sale.destroy({
            where: {
                saleId: id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updateSale(sale) {
    try {
        await Sale.update(sale, {
            where: {
                saleId: sale.saleId
            }
        })
        return await getSale(sale.saleId)
    } catch (error) {
        throw error
    }
}


export default {
    insertSale,
    getSales,
    getSale,
    updateSale,
    deleteSale,
    getSalesBySupplierId
}