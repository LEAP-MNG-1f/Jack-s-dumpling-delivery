import express from "express";
import {
  createFood,
  getFoods,
  deleteFood,
  putFood,
} from "../controllers/food.controller.js";
const foodRouter = express.Router();

foodRouter.post("/food", createFood);
foodRouter.get("/foods", getFoods);
foodRouter.put("/food", putFood);
foodRouter.delete("/food", deleteFood);

export {foodRouter};
