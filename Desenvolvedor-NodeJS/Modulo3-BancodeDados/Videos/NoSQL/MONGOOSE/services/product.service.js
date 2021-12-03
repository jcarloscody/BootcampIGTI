import productInfoRepository from '../repositories/productInfo.repository.js'


async function getProduct(id) {
    //const product = await productRepository.getProduct(id) //dando uma resposta com dois bancos sql e nosql
    product.info = await productInfoRepository.getProductInfo(parseInt(id))
    return product
}

async function saveProductInfo(productInfo) {
    await productInfoRepository.createProductInfo(productInfo)
}

async function updateProductInfo(productInfo) {
    await productInfoRepository.updateProductInfo(productInfo)
}

async function updateProductInfo(productInfo) {
    await productInfoRepository.updateProductInfo(productInfo)
}

async function createReview(review, productId) {
    await productInfoRepository.createReview(review, productId)
}

async function deleteReview(id, index) {
    await productInfoRepository.deleteReview(id, index)
}

async function findAll() {
    return await productInfoRepository.findAll()
}

async function deleteProductInfo(productId) {
    await productInfoRepository.deleteProductInfo(parseInt(productId))
}

export default {
    getProduct,
    saveProductInfo,
    updateProductInfo,
    createReview,
    deleteReview,
    findAll,
    deleteProductInfo
}