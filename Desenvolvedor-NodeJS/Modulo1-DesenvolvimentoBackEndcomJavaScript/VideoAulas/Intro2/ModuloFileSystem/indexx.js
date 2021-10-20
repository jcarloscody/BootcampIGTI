import fs from "fs"

//trabalhando com o file system sync. aqui nao tem callback, a therd fica travada  - forma sincrona - nao recomendado 

try {
    console.log('1')
    fs.writeFileSync("teste2.txt", "balabbal ablbasnb");
    console.log("2")
    let dados = fs.readFileSync("teste2.txt", "utf-8");
    console.log(dados);
    console.log("3");
} catch (error) {
    
}