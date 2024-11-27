import express from "express";
import {
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/category", addCategory);
categoryRouter.put("/category", updateCategory);
categoryRouter.delete("/category", deleteCategory);

export { categoryRouter}
