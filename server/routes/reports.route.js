import express from "express"
import { protectedRoute } from "../middlewares/protectedRoute.js"
import { createReport } from "../controllers/reports.controllers.js"
import upload from "../middlewares/uploadImage.js"

const router = express.Router()

router.post("/", protectedRoute, upload.single("image"), createReport)

export default router
