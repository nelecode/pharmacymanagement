import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produt"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const billSchema = new mongoose.Schema(
    {
        customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
        order: [orderItemSchema]
    },
    { timestamps: true }
)

export const Bill = mongoose.model("Bill", billSchema)