import mondodb from 'mongodb'

function getClient() {
    const uri = "string que vc pega lá no mongo"
    return new mondodb.MongoClient(uri)
}


export default getClient