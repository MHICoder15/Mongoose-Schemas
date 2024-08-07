import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        default: 0,
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }
})

const orderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    totalQuantity: {
        type: Number,
        default: 0,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ['Pending', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    items: [orderItemsSchema]
}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema)