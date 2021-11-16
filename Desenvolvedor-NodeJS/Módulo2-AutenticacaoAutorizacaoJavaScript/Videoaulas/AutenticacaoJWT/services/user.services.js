import jwt from "jsonwebtoken"; //json web token - biblioteca que instalamos - npm i jsonwebtoken - 
import bcryt from 'bcrypt' //biblioteca encrypt - npm i bcrypt - uma bibliteca que criptografa dados 
/**
 * Logica
 * - cria um usuario
 * - fazer um request manda login/senha
 * - verifcar se existe no bd
 * - enviar um token para oclient
 * - depois para o cliente envia o token para cada request que fizer
 * - valida o token
 * - enviar a response
 */



//SIMULACRO DE BD
var users = {};

async function getUsers() {
    return users;
}

async function createUser(user) {

    //metodo hash pega um dado e criptografa este dado e o metodo compare que pega um dado junto com outro dado criptografado e compara se os dois sao equivalentes
    const encryptedPwd = await bcryt.hash(user.password, 1);

    users[user.username] = {
        password: encryptedPwd,
        role: user.role
    }

    return users;
}

async function login(user) {

    const databaseUser = users[user.username];

    if (databaseUser) {
        const pwdMatches = bcryt.compareSync(user.password, databaseUser.password)

        if (pwdMatches) {
            //{ role: databaseUser.role, curso: 'Node Módulo 2' } - isto é o payload
            const jwtToken = jwt.sign({ role: databaseUser.role, curso: 'Node Módulo 2' }, 'secretKey', { expiresIn: 300 })  //vamos assinar um token, vamos assinar uma determinada informação, e com isso vamos criar um token jwt
            return `${jwtToken} -- Login com sucesso`;
        } else {
            throw new Error('Senha Incorreta')
        }
    } else {
        throw new Error('User nao found')
    }

}

export default {
    createUser,
    login,
    getUsers
}