import express from 'express';

const router = express.Router();  //criando uma instancia de router


router.get("/", (req, res)=>{
    
    res.send("vc esta nos carros")

})


export default router;