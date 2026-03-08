import express from 'express'
import { getUser, login } from '../controllers/auth.controller.js'
import { protectedRoute } from '../middlewares/protectedRoute.js'

const router = express.Router()

router.post("/login", login)
router.get("/me", protectedRoute , getUser)

export default router