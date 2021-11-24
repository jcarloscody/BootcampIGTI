
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

async function getClients(request, response, next) {
    try {
        response.send(await clientService.getClients())
        logger.info(`GET /client`)
    } catch (error) {
        next(error)
    }
}


async function getClient(request, response, next) {
    try {
        response.send(await clientService.getClient(request.params.id))
        logger.info(`GET /client`)
    } catch (error) {
        next(error)
    }
}

async function deleteClient(request, response, next) {
    try {
        await clientService.deleteClient(request.params.id)
        response.send(`ok - `)
        logger.info(`GET /client`)
    } catch (error) {
        next(error)
    }
}

async function updateClient(request, response, next) {
    try {
        let client = request.body;
        if (!client.client_id || !client.nome || !client.cpf || !client.phone || !client.email || !client.address) {
            throw new Error("ID, Name, CPF, Phone, email, Address são obrigatórios")
        }
        response.send(await clientService.updateClient(client))
        logger.info(`UPDATE ${JSON.stringify(client, null, 2)}`)
    } catch (error) {
        next(error)
    }
}

export default {
    createClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}