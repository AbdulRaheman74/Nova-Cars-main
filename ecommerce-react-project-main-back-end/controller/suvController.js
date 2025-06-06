import { suvModel } from "../model/suvModel.js";

// ========== CREATE ==========
export const createSuvController = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      year,
      model,
      mileage,
      vin,
      imageUrl,
      fuelType,
      transmission,
    } = req.body;

    // Basic validation
    if (!name || !description || !price || !mileage || !imageUrl || !fuelType || !transmission) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newCar = new suvModel({
      name,
      description,
      price,
      year,
      model,
      mileage,
      vin,
      imageUrl,
      fuelType,
      transmission,
    });

    await newCar.save();

    res.status(201).json({
      success: true,
      message: "Suv created successfully",
      car: newCar,
    });
  } catch (error) {
    console.error("Create Car Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ========== UPDATE ==========
export const updateSuvController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCar = await suvModel.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (error) {
    console.error("Update Car Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ========== DELETE ==========
export const deleteSuvController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCar = await suvModel.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error("Delete Car Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ========== GET ALL ==========
export const getAllSuvController = async (req, res) => {
  try {
    const cars = await suvModel.find().sort({ createdAt: -1 }); // optional sorting by newest
    res.status(200).json({ success: true, cars });
  } catch (error) {
    console.error("Get All Cars Error:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
