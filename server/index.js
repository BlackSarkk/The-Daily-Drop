import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"

const app = express();
app.use(express.json());
dotenv.config()

app.use("/api/products", productRoutes)



const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at http://localhost:${PORT}`)
})




