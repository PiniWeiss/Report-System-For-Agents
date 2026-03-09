import express from 'express'
import { createUser, getUsers } from '../controllers/user.controllers.js'
import { protectedRouteAdmin } from '../middlewares/protectedRoute.js'

const router = express.Router()

router.post("/users", protectedRouteAdmin, createUser)
router.get("/users", protectedRouteAdmin, getUsers)

export default router 