import userRoutes from '../route/users/user.route.js'
import drugRoutes from '../route/Check Drug/checkdrug.route.js'
import AdminRoutes from '../route/admin/admin.route.js';
import express from 'express'
const router = express.Router()

    
    router.use('/user', userRoutes)
    router.use('/drug', drugRoutes)
    router.use('/admin',AdminRoutes)
export default router;