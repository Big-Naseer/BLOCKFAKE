import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
    CompanyName: {
        type : String,
    },
    userName: {
        type : String,
    },
    email :{
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },

},{
    timestamps: true
});

export default mongoose.model("User", userSchema);