import express from "express";
import { getAllAdmins } from "../../controller/admin.controller.js ";
import { adminLogin } from "../../controller/auth.controller.js";

const router = express.Router()

router.get('/', getAllAdmins);
router.get('/login',adminLogin);

export default router;