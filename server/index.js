import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";


const app = express();
dotenv.config()


app.get("/products", (req, res) => {
    res.send(`Server is running`)
})


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
    connectDB()
})


