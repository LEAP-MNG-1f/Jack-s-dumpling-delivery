import {model,Schema, SchemaTypes} from "mongoose";

const foodSchema = new Schema({
  userID: {type: String, ref:"Order",required:true},
  name: { type: String, required: true },
  image: { type: String, required: true },
  ingredients: { type: String, required: true },
  price: { type: Number, required: true },
  categoryId:{type:SchemaTypes.ObjectId, ref:"Category", required:true}
});

export const FoodModel = model("Food", foodSchema);
