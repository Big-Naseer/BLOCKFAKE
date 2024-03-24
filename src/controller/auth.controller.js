import Admin from "../model/admin.model";
import { createHash } from "crypto";
import { loginValidator } from "../validator/admin.validator";
import { formatZodError } from "../utils/errorMessage";

export const adminLogin = async (res, req) => {

    const loginResult = loginValidator.safeParse(req.body);
    if (!loginResult.success) {
        return res.status(400).json(formatZodError(loginResult.error.issues));
    }

    const admin = await Admin.findOne({email: req.body.email});
    
    if (!admin)
    return res.status(400).json({
        success: false,
        message: "email not found!!"
    });

    const encryted = createHash("sha256").update(req.body.password).digest("base64");

    if (admin.password != encryted)
    return res.status(400).json
};