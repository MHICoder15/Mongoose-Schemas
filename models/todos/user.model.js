import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be 18 or above']
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        requird: [true, 'Password is required.']
    }
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)