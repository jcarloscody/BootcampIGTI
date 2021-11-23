import { cli } from 'winston/lib/winston/config';
import clientService from '../services/client.service.js'

async function createClient(request, response, next) {

    try {
        let client = request.body;

        if (!client.nome || !client.cpf || !client.phone || !client.email || !client.address) {
            throw new Error("Name, CPF, Phone, email, Address são obrigatórios")
        }


        response.send(await clientService.createClient(client))
        logger.info(`POST ${JSON.stringify(client, null, 2)}`)
    } catch (error) {
        next(error)
    }

}


export default {
    createClient
}