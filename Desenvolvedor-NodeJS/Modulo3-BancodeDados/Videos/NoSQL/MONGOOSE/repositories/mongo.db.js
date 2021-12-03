import mongoose from 'mongoose'


async function connect() {
    const uri = "string que vc pega lá no mongo"
    return await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
}


export default connect