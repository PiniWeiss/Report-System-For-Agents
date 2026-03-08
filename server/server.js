import express from "express"
import dotenv from 'dotenv'

const PORT = process.env.PORT || 5000

dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("Server running")
})

app.listen(PORT, () => {
    console.log("Server running on port:", PORT)
})