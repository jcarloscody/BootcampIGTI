import { promises as fs } from "fs"


init()


async function init() {
    try {
        await fs.writeFile("testeAsyncAwait.txt", "blablabalbaosdbasfonaf");
        await fs.appendFile("testeAsyncAwait.txt", "\nestou entendo promises");
        let dados = await fs.readFile("testeAsyncAwait.txt", "utf-8");
        console.log(dados);
    } catch (error) {
        console.log(error)
    }
}