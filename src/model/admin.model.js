import { Schema, model } from "mongoose";
import { string } from "zod";

const adminSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type:String,
        enum: ["Admin", "Superadmin"],
        default: "Admin",
     },
});

export default model("Admin", adminSchema);