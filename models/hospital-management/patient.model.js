import mongoose from "mongoose";

const patientAddressSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    }
})
const patientSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    diagonsedWith: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ['M', 'F', 'O'],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    currentAddress: { patientAddressSchema }
}, { timestamps: true })

export const Patient = mongoose.model('Patient', patientSchema)