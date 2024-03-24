import express from 'express'
import { addDrug, updateDrug} from '../../controller/user.controller.js'
const router = express.Router()

router.post('/add-drug', addDrug);
router.post('/update-drug',updateDrug)

export default router