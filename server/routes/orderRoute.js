import express from "express";
import {
  createOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/createorder", createOrder);
orderRouter.get("/orders", getOrders);
orderRouter.delete("/deleteorder", deleteOrder);
orderRouter.put("/updateorder", updateOrder);
export default orderRouter;
