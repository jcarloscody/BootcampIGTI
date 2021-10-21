import express from 'express'

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{//para funcao sincronas
    throw new Error("erro de test"); //vamos estorar o erro
})

app.post("/", async (req, res, next)=>{//para funcao assincronas. neste caso para que ele caia no tratamento de erros é preciso usar o next em vez de simplesmente estourar o erro e é interessante usar o try/catch
    try {
        throw new Error("erro de test"); //vamos estorar o erro
    } catch (error) {
        next(error);
    }
})


app.use((error, req, res, next) => {
    console.log("erro")
    //res.status(500).send("erro status 500"); //
    next(err);
});

app.use((error, req, res, next) => {
    console.log("erro")
    res.status(500).send("erro status 500 ------"); //
});

app.listen(3000, ()=>{
    console.log("started server")
})