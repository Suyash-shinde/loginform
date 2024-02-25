import 'dotenv/config'
import express from "express"
import connectDb from './db/index.js';
import cors from 'cors';
import authRoutes from "./routes/auth.js";
const app=express();
const port=process.env.PORT;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(port,()=>{
    console.log(`App is listeing on port: http://localhost:${port}`);
})

connectDb();