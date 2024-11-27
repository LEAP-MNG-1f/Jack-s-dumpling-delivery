import { OrderModel } from "../model/order.model.js";

const createOrder = async (req, res) => {
  const newOrder = await OrderModel.create(req.body);
  res.status(201).json({ success: true, result: newOrder });
};

const getOrders = async (_, res) => {
  const orders = await OrderModel.find().populate("foodsID").populate("UserID");
  res.status(200).json({ success: true, result: orders });
};

const updateOrder = async (req, res) => {
  try {
    const updateFields = await OrderModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).json({ success: true, data: updateFields });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

const deleteOrder = async (req, res) => {
  const result = await OrderModel.findByIdAndDelete(req.body);
  res.status(201).json({
    success: true,
  });
};

export { createOrder, getOrders, updateOrder, deleteOrder };
