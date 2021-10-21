import express from "express";
//https://www.youtube.com/watch?v=HmTuOC5h6LQ

const app = express(); //criando uma instancia do Express

//configurando uma rota com a requisicao para method GET
app.get("/", (request, resp) => {
    resp.send("Hello Word!");
});

//method POST
app.post("/", (request, resp) => {
    let a = 100;
    let b = 200;
    let resul = a + b;
    resp.send(`resultado: ${resul}`)
})

function soma(a, b) {
    return a + b;
}

//iniciar o servidor
app.listen(3000, ()=>{
    console.log("sucesso");
})