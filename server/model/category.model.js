import{ Schema,  model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const categoryModel = model("Category", categorySchema);