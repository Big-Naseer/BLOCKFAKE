import  express  from 'express';
import { find } from '../../controller/checkdrug.controller.js';
import { filterDrugs } from '../../controller/filter.controller.js';

const router = express.Router();

router.post('/find', find);


router.get('/filter', filterDrugs);

export default router;