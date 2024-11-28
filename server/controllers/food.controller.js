import { FoodModel } from "../model/food.model.js";

const createFood = async (req, res) => {
  const result = await FoodModel.create();
  res.status(201).json({ success: true, data: result });
};

const getFoods = async (_, res) => {
  const result = await FoodModel.find().populate("categoryID");
  res.status(200).json({ success: true, data: result });
};

const putFood = async (req, res) => {
  try {
   
    const updatedFood = await FoodModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).json({ success: true, data: updatedFood });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  } finally {
  }
};

const deleteFood = async (req, res) => {
  try {
    const result = await FoodModel.findByIdAndDelete(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  } finally {
    res.json({ success: false });
  }
};

export { createFood, getFoods, deleteFood, putFood };
