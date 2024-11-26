import express from "express";
import {
  addCategory,
  getCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categories", getCategory);
categoryRouter.post("/addcategory", addCategory);
categoryRouter.put("/updatecategory", updateCategory);
categoryRouter.delete("/deletecategory", deleteCategory);

export default categoryRouter;
