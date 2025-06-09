import express from "express"
import { createVansController, updateVansController, deleteVansController, getAllVansController } from "../controller/vansContoller.js";

const vansRoute=express.Router();

vansRoute.post("/create" , createVansController);
vansRoute.put("/update/:id", updateVansController);
vansRoute.delete("/delete/:id", deleteVansController);
vansRoute.get("/getall", getAllVansController);


export default vansRoute;