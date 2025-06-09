import mongoose from "mongoose";

const tracksSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "Free Supercharging" }, // Optional, with default value
    price: { type: Number, required: true },
    year: { type: String, default: "2024" },
    model: { type: String, default: "Base" },
    mileage: { type: String, required: true }, // e.g., "2.5ft / 100km"
    vin: { type: String, default: "N/A" },
    imageUrl: { type: String, required: true },
    fuelType: {
      type: String,
      enum: ["Gasoline", "Diesel", "Electric"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Manual", "Auto"],
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

export const tracksModel = mongoose.model("Tracks", tracksSchema);
