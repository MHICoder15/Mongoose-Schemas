import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
    },
    city: {
        type: string,
        required: true
    },
    bedCapacity: {
        type: Number,
        default: 0,
        required: true
    },
    revenue: {
        type: Number,
        required: true
    },
    spacializedIn: [{ type: String }],
}, { timestamps: true })

export const Hospital = mongoose.model('Hospital', hospitalSchema)