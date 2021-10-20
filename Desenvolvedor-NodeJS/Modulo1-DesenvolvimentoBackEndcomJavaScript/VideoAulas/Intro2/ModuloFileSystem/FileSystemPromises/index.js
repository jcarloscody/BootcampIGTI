//em vez de usar o callback do filesystem, vamos usar a promise dela. a promise exportada é uma funcoa nomeada, no callback é default
import {promises as apelidioFs} from "fs"


apelidioFs.writeFile("testePromises.txt", "blablabalbaosdbasfonaf").then(()=>{
    apelidioFs.appendFile("testePromises.txt","\nestou entendo promises").then(()=>{
        apelidioFs.readFile("testePromises.txt", "utf-8").then((resposta) => {
            console.log(resposta)
        }).catch(erro => {
            console.log("erro na leitura")
        })
    }).catch(erro => {
        console.log("erro na reescrita")
    })
}).catch( erro => {
    console.log("erro na escrita")
});


//cuidado com o promises hell, tem tbm o call back hell, para evitar isso tem o async 