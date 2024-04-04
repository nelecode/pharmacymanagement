import { Bill } from "../models/bill.js"
import { Customer } from "../models/customer.js"
import { Products } from "../models/products.js"



const allProductsController = async (req, res) => {
    const data = await Products.find({})
    try {
        if (!data) {
            throw new Error("no data found")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while fetching data" })
    }
}

const singleProductsController = async (req, res) => {
    const singleProduct = req.params.id
    try {
        const data = await Products.findById(singleProduct)
        if (!data) {
            throw new Error("no data found")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while fetching data" })
    }
}

const createProduct = async (req, res) => {
    const { productName, manufacture, batchNo, expiry, rate, qtyAvailable } = req.body
    const data = await Products.create({ productName, manufacture, batchNo, expiry, rate, qtyAvailable })
    try {
        if (!data) {
            throw new Error("data posting error")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while creating data" })
    }
}

const updateProduct = async (req, res) => {
    const singleProduct = req.params.id
    const { productName, manufacture, batchNo, expiry, rate, qtyAvailable } = req.body
    const data = await Products.findByIdAndUpdate(singleProduct, { productName, manufacture, batchNo, expiry, rate, qtyAvailable })
    try {
        if (!data) {
            throw new Error("data update error")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while updating data" })
    }
}

const deleteProduct = async (req, res) => {
    const singleProduct = req.params.id
    const data = await Products.findByIdAndDelete(singleProduct)
    try {
        if (!data) {
            throw new Error("data deleting error")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while deleting data" })
    }
}

const createCustomer = async (req, res) => {
    const { customerName, mobNo, add } = req.body
    const data = await Customer.create({ customerName, mobNo, add })
    try {
        if (!data) {
            throw new Error("data posting error")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while creating data" })
    }
}

const createBill = async (req, res) => {
    const { customer, order } = req.body
    const data = await Bill.create({ customer, order })
    try {
        if (!data) {
            throw new Error("data posting error")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while creating data" })
    }
}

const allBillController = async (req, res) => {
    // const data = await Bill.find({}).populate({

    //     path: "order",
    //     populate: {
    //         path: "productId",
    //         model: "Produt"
    //     }
    // })
    const data = await Bill.find({})
        .populate("customer")
        .populate("order.productId")
    try {
        if (!data) {
            throw new Error("no data found")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while fetching data" })
    }
}

const singleBillController = async (req, res) => {
    const singleBill = req.params.id
    const data = await Bill.findById(singleBill)
        .populate("customer")
        .populate("order.productId")
    try {
        if (!data) {
            throw new Error("no data found")
        }
        res.status(200).json(data)
    } catch (err) {
        res.send(500).json({ error: "error occured while fetching data" })
    }
}


export {
    allProductsController,
    singleProductsController,
    createProduct,
    updateProduct,
    deleteProduct,
    createCustomer,
    createBill,
    allBillController,
    singleBillController
}