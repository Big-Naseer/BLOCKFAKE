import Admin from "../model/admin.model.js";
import { updateValidator } from "../validator/admin.validator.js";
import { formatZodError } from "../utils/errorMessage.js";

export const getAllAdmins = async(req, res) => {
    const allAdmins = await Admin.find({},"name email role");
    res.json(allAdmins)
}