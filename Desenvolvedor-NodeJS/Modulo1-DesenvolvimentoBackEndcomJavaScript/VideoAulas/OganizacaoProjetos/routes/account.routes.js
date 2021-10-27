import express, { Router } from "express";

import AccountController from "../controllers/account.controller.js";

const routerAccount = express.Router();

routerAccount.post("/", AccountController.createAccount)
routerAccount.get("/", AccountController.getAccounts)
routerAccount.get("/:id", AccountController.getAccount)
routerAccount.delete("/:id", AccountController.deleteAccount)
routerAccount.put("/", AccountController.updateAccount)
routerAccount.patch("/updateBalance", AccountController.updateBalance)

routerAccount.use((erro, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${erro.message} `)

    res.status(400).send({ erro: erro.message })
})
export { routerAccount };