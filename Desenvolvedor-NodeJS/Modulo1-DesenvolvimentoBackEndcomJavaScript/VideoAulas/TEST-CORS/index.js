import express from 'express';

const app = express();

app.use(express.static("public"));

app.listen(3001, () => {
    console.log("started 3001")
})