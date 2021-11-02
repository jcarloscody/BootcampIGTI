import express from "express";
//https://www.youtube.com/watch?v=LZa0qxI4pR0
//https://www.youtube.com/watch?v=3fNfdMLCC0c
//https://www.youtube.com/watch?v=VicRUHLmFys

const app = express();

app.use(express.json())  //avisando ao express que iremos trabalhar com json


//method all - vai capturar todos os methods http que chegar para este endpoint
app.all("/testAll", (request, resp) => {
    resp.send(`Metodo: ${request.method}`);
});

//? -> vai fazer com que a ultima letra da rota seja opcional, ou seja, no exemplo podemos colocar teste ou test
app.get("/teste?", (resq, resp) => {
    resp.send("rota com ?")
})


//+ -> vai indicar que a ultima letra da rota pode ser repetida várias vezes, ou seja, no exemplo pode ser buz ou buzzzzzzzzzz
app.get("/buz+", (resq, resp) => {
    resp.send("buz +")
})

//*  -> é um coringa que significa qq coisa. neste exemplo significa, one qualquer coisa que escrever Blue
app.get("/one*Blue+", (resq, resp) => {
    resp.send("* coringa " + resq.path)
})


// ()  -> vai tratar como unidade. se colocar ? a unidade vai ser opcional no exemplo pode ser home ou homeing, se + pode repetir a unidade home, homeing, homeinginginging
app.post("/home(ing)?", (resq, resp) => {
    resp.send("/home(ing)?")
})

//expressao regular. exemplo abaixo vai indicar que se vc digitar qq coisa Red, ele vai entender com endpoint
app.get(/.*Red$/, (resq, resp) => {
    resp.send("expressaoRegular")
})




//parametros no body da requisição
app.post("/parametrobody", (resq, resp) => {
    const corpo = resq.body;
    console.log(corpo);
    resp.send(corpo)
})







//parametros na rota:
app.get("/parametronarota/:id/:a", (resq, resp) => {
    console.log(resq.params.id, " ", resq.params.a)
    resp.send(resq.params.id)
})

app.get("/parametronarotaopcional/:id/:a?", (resq, resp) => {
    resp.send(resq.params.id)
    console.log(resq.params.id, " ", resq.params.a)
})




//parametros via query -> vc usa a ? para indicar um parametro, o parametro deixa de fazer parte da rota /tbestquery?nome=josue&email=jads&cpf=12343, é um par chave e valor
app.get("/testquery", (req, res) => {
    res.send(req.query)
    //res.send(req.query.nome)
    console.log(req.query)
})


//com o parametro next -  ele vai permititr que mais de funcao seja executada para cada requisicao
app.get("/testquerynext", (req, res, next) => {
    console.log("execução da 1º callback")
    console.log("chamando a proxima...")
    next();
}, (req, res) => {
    console.log("execução da 2º callback")
    res.end()
})


//next com array
const callback1 = (req, res, next) => {
    console.log("callback 1")
    next()
}

function callback2(req, res, next) {
    console.log("callback 2")
    next()
}

const callback3 = (req, res) => {
    console.log("callback 3")
    res.end()
}

app.get("/nextarray", [callback1, callback2, callback3])




//funcao route() ->  é um pouco semelhante ao All que captura de todos os methods, aqui no route vc define qual o method que vc quer capturar
app.route("/testRoute")
    .get((req, res) => {
        res.send("o route capturou a requisição GET")
    })
    .put((req, res) => {
        res.send("o route capturou a requisição PUT")
    })


//iniciar o servidor
app.listen(3000, () => {
    console.log("sucesso2");
})