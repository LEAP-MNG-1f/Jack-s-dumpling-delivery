import { categoryModel } from "../model/category.model.js";

const getCategory = async (_, res) => {
  const result = await categoryModel.find();
  res.status(200).json({ success: true, data: result });
};

const addCategory = async (req, res) => {
  const result = await categoryModel.create(req.body);
  res.status(201).json({ success: true, data: result });
};

const deleteCategory = async (req, res) => {
  try {
    const result = await categoryModel.findByIdAndDelete(req.body);
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

const updateCategory = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const category = await categoryModel.findById(_id);
    if (name) category.name = name;
    const updatedCategory = await categoryModel.findByIdAndUpdate(
      _id,
      category,
      {
        new: true,
      }
    );
    res.status(200).json({ success: true, data: updatedCategory });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export { getCategory, addCategory, deleteCategory, updateCategory };
