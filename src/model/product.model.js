import { Schema, model } from "mongoose";

const drugSchema = new Schema(
    {
        drugName: {
            type: String,
            required: true,
        },
        drugId: {
            type: String,
            unique:true
        }
        ,
        manufacturedDate: {
            type: Date, // Use Date type for representing date and time
            required: true,
        },
        manufacturer: {
            type: String,
            required: true,
        },
        expiryDate: {
            type: Date, // Use Date type for representing date and time
            required: true,
        },
        nafdacReg: {
            type: String,
            required: true,
        },
        component: {
            type: String,
            required: true,
        },
        qrcode: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

// Middleware to convert string to date before saving
drugSchema.pre('save', function(next) {
    // Use a combination of drugName, Date.now(), and a random string for drugId
    this.drugId = `${this.drugName}_${Date.now()}`;
    this.manufacturedDate = new Date(this.manufacturedDate);
    this.expiryDate = new Date(this.expiryDate);
    next();
});

export default model("Drug", drugSchema);
