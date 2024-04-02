import express from "express";
import { getAllAdmins } from "../../controller/admin.controller.js ";
import { adminLogin } from "../../controller/auth.controller.js";

const router = express.Router()

router.get('/', getAllAdmins);

export default router;