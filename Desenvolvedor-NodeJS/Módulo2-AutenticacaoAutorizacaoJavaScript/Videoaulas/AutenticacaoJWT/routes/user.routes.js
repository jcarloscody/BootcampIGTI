import express from 'express'
import userController from '../controllers/user.controller.js'

const router = express.Router()

router.get("/", userController.getUsers)
router.post("/createUser", userController.createUser)
router.post("/login", userController.login)

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
    res.status(400).send({ error: err.message })
})

export default router;