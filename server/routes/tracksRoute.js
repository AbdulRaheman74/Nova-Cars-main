import express from "express"
import { createTracksController, updateTracksController, deleteTracksController, getAllTracksController } from "../controller/tracksController.js";

const tracksRoute=express.Router();

tracksRoute.post("/create" , createTracksController);
tracksRoute.put("/update/:id", updateTracksController);
tracksRoute.delete("/delete/:id", deleteTracksController);
tracksRoute.get("/getall", getAllTracksController);


export default tracksRoute;