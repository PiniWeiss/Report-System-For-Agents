import express from "express"
import dotenv from 'dotenv'
import cookieParser  from 'cookie-parser'
import cors from 'cors'


import authRouter from "./routes/auth.route.js"
import adminRouter from "./routes/user.route.js"
import { connecToMongoDB } from "./db/connectionToMongoDB.js"

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use(cookieParser())

dotenv.config()




app.use("/api/auth", authRouter)
app.use("/api/admin", adminRouter)


app.listen(PORT, () => {
    connecToMongoDB()
    console.log("Server running on port:", PORT) 
})