import express from "express";


//o objetivo é servir arquivos estaticos

const app = express();

app.use(express.json())

app.use(express.static("public")); //vamos servir arquivos estativos do diretorio public
app.use("/img", express.static("public"))



app.listen(3000, () => {
    console.log("subiu");
});