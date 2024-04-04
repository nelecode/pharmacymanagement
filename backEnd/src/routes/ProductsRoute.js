import { Router } from "express"
import {
    allProductsController,
    createProduct,
    deleteProduct,
    singleProductsController,
    updateProduct,
    createCustomer,
    createBill,
    allBillController,
    singleBillController
} from "../controllers/productsController.js"

const router = Router()

router.get("/products", allProductsController)

router.get("/products/:id", singleProductsController)

router.post("/products", createProduct)

router.put("/products/:id", updateProduct)

router.delete("/products/:id", deleteProduct)

router.post("/customer", createCustomer)

router.post("/bill", createBill)

router.get("/bill", allBillController)

router.get("/bill/:id", singleBillController)

export default router;