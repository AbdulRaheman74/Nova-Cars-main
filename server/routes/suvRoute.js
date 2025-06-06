import express from "express"
import { createSuvController, updateSuvController, deleteSuvController, getAllSuvController } from "../controller/suvController.js";

const suvRoutes=express.Router();

suvRoutes.post("/create" , createSuvController);
suvRoutes.put("/update/:id", updateSuvController);
suvRoutes.delete("/delete/:id", deleteSuvController);
suvRoutes.get("/getall", getAllSuvController);


export default suvRoutes;