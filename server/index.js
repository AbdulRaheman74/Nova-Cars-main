import express from "express"
import connectDB from "./db/connectDB.js";
import dotenv from 'dotenv';
import carRoutes from "./routes/carRoute.js";
import cors from "cors";
import suvRoutes from "./routes/suvRoute.js";
import tracksRoute from "./routes/tracksRoute.js";
import vansRoute from "./routes/vansRoute.js";


const app=express();
dotenv.config();

app.use(express.json())
app.use(cors());

const dbUrl=process.env.DBURL
const dbName=process.env.DBNAME

app.use("/api/cars", carRoutes)
app.use("/api/suvs",suvRoutes)
app.use("/api/tracks",tracksRoute)
app.use("/api/vans",vansRoute)

connectDB(dbUrl,dbName)
 app.listen(6060,()=>{
    console.log(`Server Listing on port no 6060`)
})