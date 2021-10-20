import {promises as fs, write} from "fs"
//https://www.youtube.com/watch?list=PLliVpcscu0l5knbl572pzTYxFdj6Zw5ro&v=jWvYaNi229w
writeReadJson();

async function writeReadJson() {
    try {
        const arraysCarros = ["gol", "palio", "uno"];
        let nome = "josue";
        let obj = {
            carros: arraysCarros,
            proprietario: nome
        }

        await fs.writeFile("arquivoJSON.json", JSON.stringify( obj));//stringify -  converte objetos em texto
        
        let dados = await fs.readFile("arquivoJSON.json", "utf-8"); //nao precisa nem colocar o , "utf-8", pois na conversao para JSON ele já entende, a nao ser que queira ver em texto
        
        console.log(dados)
        dados = JSON.parse(dados); //converte o texto em objeto json
        console.log(dados)
        dados.carros.push("bablbab")
        console.log(dados)
        
        await fs.writeFile("arquivoJSON.json", JSON.stringify(dados));
    } catch (error) {
        
    }
}