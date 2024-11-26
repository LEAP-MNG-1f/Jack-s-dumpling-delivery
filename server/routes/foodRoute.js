import express from "express";
import {
  createFood,
  getFoods,
  deleteFood,
  putFood,
} from "../controllers/foodController.js";
const foodRouter = express.Router();

foodRouter.post("/createfood", createFood);
foodRouter.get("/foods", getFoods);
foodRouter.put("/updatefood", putFood);
foodRouter.delete("/deletefood", deleteFood);

export default foodRouter;
