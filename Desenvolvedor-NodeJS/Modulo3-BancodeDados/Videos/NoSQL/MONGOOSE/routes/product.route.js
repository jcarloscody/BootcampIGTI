import express from 'express'

import productController from '../controllers/product.controller.js'

const router = express.Router()



router.get("/:id", productController.getProduct)
router.get("/info", productController.findAll)
router.post("/info", productController.createProductInfo)
router.put("/info", productController.updateProductInfo)
router.delete("/info/:id", productController.deleteProductInfo)
router.post("/review", productController.createReview)
router.delete("/:id/review/:index", productController.deleteReview)



export default router