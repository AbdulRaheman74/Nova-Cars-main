import { carModel } from "../model/carModel.js";

// Create
export const createCarController = async (req, res) => {
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

    // Validation
    if (!name || !description || !price || !fuelType || !transmission || !mileage || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const newCar = new carModel({
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
      message: "Car Created Successfully",
      car: newCar,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update
export const updateCarController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedCar = await carModel.findByIdAndUpdate(id, updatedData, {
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
    console.error(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete
export const deleteCarController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCar = await carModel.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({ success: false, message: "Car not found" });
    }

    res.status(200).json({ success: true, message: "Car deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get All
export const getAllCarsController = async (req, res) => {
  try {
    const cars = await carModel.find();
    res.status(200).json({ success: true, cars });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
