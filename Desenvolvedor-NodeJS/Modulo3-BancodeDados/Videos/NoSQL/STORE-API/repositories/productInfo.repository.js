
import getClient from "./mongo.db";

async function createProductInfo(productInfo) {
    const client = getClient();

    try {
        await client.connect;
        await client.db("store").collection("productInfo").insertOne(productInfo)
    } catch (error) {
        throw error
    } finally {
        await client.close;
    }
}

async function updateProductInfo(productInfo) {
    const client = getClient();

    try {
        await client.connect()
        await client.db("store").collection("productInfo").updateOne({ productId: productInfo.productId }, { $set: { ...productInfo } })
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}

async function getProductInfo(productId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("store").collection("productInfo").findOne({ productId })
    } catch (error) {
        throw error
    } finally {
        await client.close()
    }
}


async function createReview(review, productId) {
    try {
        const productInfo = await getProductInfo(productId)
        productInfo.review.push(review)
        return await updateProductInfo(productInfo)
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
    const client = getClient()
    try {
        await client.connect()
        return await client.db("store").collection("productInfo").find({}).toArray()
    } catch (error) {
        throw error
    }
}

async function deleteProductInfo(productId) {
    const client = getClient();
    try {
        await client.connect();
        return await client.db("store").collection("productInfo").deleteOne({ productId })
    } catch (error) {
        throw error
    } finally {
        await client.close()
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