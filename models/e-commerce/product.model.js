import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        default: 0,
        required: true,
    },
    stack: {
        type: Number,
        default: 0,
        required: true
    },
    inStack: {
        type: Boolean,
        default: true,
        required: true
    },
    condition: {
        type: String,
        enum: ['New', 'Used'],
        default: 'New'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
    
}, { timestamps: true })

export const Product = mongoose.model('Product', productSchema)