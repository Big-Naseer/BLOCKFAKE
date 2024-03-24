import Admin from "../model/admin.model.js";
import {connectDB} from "../database/db.js";
import { createHash } from "crypto";
import dotenv from "dotenv";
dotenv.config({path: "../../.env"});

connectDB(process.env.MONGODB_URL);

const admin = new Admin ({
    fullName: 'BLOCKFAKE',
    email: 'info@blockfake.ng',
    password: 'blockfake@1234',
    role: 'Admin'
})

const encrytedPassword = async() => {
    const hash = createHash("sha256").update(admin.password).digest("base64");
    admin.password =hash;
    console.log(admin);
    await admin.save().then(user =>{
        console.log("Admin Created");
    }).catch(err => {
        console.log(err)
    });
};

encrytedPassword();