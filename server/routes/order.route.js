import express from "express";
import {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/order", createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.delete("/order", deleteOrder);
orderRouter.put("/order", updateOrder);

export  {orderRouter}
