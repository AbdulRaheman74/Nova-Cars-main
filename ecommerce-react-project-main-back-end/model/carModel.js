import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }, // corrected spelling
  price: { type: Number, required: true },
  year: { type: String },
  model: { type: String },
  mileage: { type: String, required: true }, // e.g., "2.5ft / 100km"
  vin: { type: String },
  imageUrl: { type: String, required: true },
  fuelType: { type: String, enum: ["Gasoline", "Diesel", "Electric"], required: true },
  transmission: { type: String, enum: ["Manual", "Auto"], required: true },
});

export const carModel = mongoose.model("Car", carSchema);
