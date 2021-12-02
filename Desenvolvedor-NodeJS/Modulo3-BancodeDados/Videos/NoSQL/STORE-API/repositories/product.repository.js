import Product from '../models/product.model.js'



async function insertProduct(product) {
    try {
        return await Product.create(product)
    } catch (error) {
        throw error
    }
}

async function getProducts() {
    try {
        return await Product.findAll();
    } catch (error) {
        throw error
    }
}


async function getProduct(id) {
    try {
        return await Product.findByPk(id, { raw: true })  //raw:true  vai converter para objeto json, isto pq estamos dando uma resposta lá no service juntado os dois bando, sql e nosql
    } catch (error) {
        throw error
    }
}


async function deleteProduct(id) {
    try {
        await Product.destroy({
            where: {
                productId: id
            }
        })
    } catch (error) {
        throw error
    }
}

async function updateProduct(product) {
    try {
        await Product.update(product, {
            where: {
                productId: product.productId
            }
        })
        return await getProduct(product.productId)
    } catch (error) {
        throw error
    }
}


export default {
    insertProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}