import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
});

export const FoodModel = mongoose.model("Food", foodSchema);
