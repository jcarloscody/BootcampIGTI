
import connect from "./mongo.db";
import ProductInfoSchema from '../schemas/productInfo.schema.js'

async function createProductInfo(productInfo) {
    try {
        const mongoose = await connect()
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema)
        productInfo = new ProductInfo(productInfo)
        await productInfo.save()
    } catch (error) {
        throw error
    }
}

async function updateProductInfo(productInfo) {
    try {
        const mongoose = await connect()
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema)
        await ProductInfo.findOneAndUpdate({ productId: productInfo.productId }, productInfo)
    } catch (error) {
        throw error
    }
}

async function getProductInfo(productId) {
    try {
        const mongoose = await connect()
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema)
        const query = ProductInfo.findOne({ productId: productId })
        return await query.exec()
    } catch (error) {
        throw error
    }
}

async function createReview(review, productId) {
    try {
        const productInfo = await getProductInfo(productId)
        productInfo.reviews.push(review)
        await updateProductInfo(productInfo)
    } catch (error) {
        throw error
    }
}

async function deleteReview(id, index) {
    try {
        const productInfo = await getProductInfo(parseInt(id))
        productInfo.review.splice(index, 1)
        return await updateProductInfo(productInfo)
    } catch (error) {
        throw error
    }
}

async function findAll() {
    try {
        const mongoose = await connect()
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema)
        const query = ProductInfo.findOne({})
        return await query.exec()
    } catch (error) {
        throw error
    }
}

async function deleteProductInfo(productId) {
    try {
        const mongoose = await connect()
        const ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema)
        await ProductInfo.deleteOne({ productId })
    } catch (error) {
        throw error
    }
}

export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}