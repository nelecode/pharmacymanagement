import mongoose from "mongoose"

const customerSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    mobNo: {
        type: Number,
        required: true
    },
    add: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Customer = mongoose.model("Customer", customerSchema)