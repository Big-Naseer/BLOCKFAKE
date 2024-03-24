import userRoutes from '../route/users/user.route.js'
import drugRoutes from '../route/Check Drug/checkdrug.route.js'
import express from 'express'
const router = express.Router()

    
    router.use('/drug', userRoutes)
    router.use('/drug', drugRoutes)
export default router;