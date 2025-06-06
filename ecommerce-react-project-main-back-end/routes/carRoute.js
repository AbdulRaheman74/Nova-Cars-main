import express from "express"
import { createCarController, deleteCarController, getAllCarsController, updateCarController } from "../controller/carController.js";

const carRoutes=express.Router();

carRoutes.post("/create" , createCarController);
carRoutes.put("/update/:id", updateCarController);
carRoutes.delete("/delete/:id", deleteCarController);
carRoutes.get("/getall", getAllCarsController);


export default carRoutes;