import { FoodModel } from "../model/foodModel.js";

const createFood = async (req, res) => {
  const result = await FoodModel.create(req.body);
  res.status(201).json({ success: true, data: result });
};

const getFoods = async (_, res) => {
  const result = await FoodModel.find();
  res.status(200).json({ success: true, data: result });
};

const putFood = async (req, res) => {
  try {
    const { _id, name, image, ingredients, price } = req.body;
    const food = await FoodModel.findById(_id);
    if (name) food.name = name;
    if (image) food.image = image;
    if (ingredients) food.ingredients = ingredients;
    if (price) food.price = price;
    const updatedFood = await FoodModel.findByIdAndUpdate(_id, food, {
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
