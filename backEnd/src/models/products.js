import mongoose, { Schema, model } from "mongoose"

const productShema = new Schema({
    productName: {
        type: String,
        required: true,
        index: true
    },
    manufacture: {
        type: String,
        required: true
    },
    batchNo: {
        type: String,
        required: true
    },
    expiry: {
        type: Date,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    qtyAvailable: {
        type: Number,
        required: true
    }
}, { timestamps: true })

export const Products = model("Produt", productShema)