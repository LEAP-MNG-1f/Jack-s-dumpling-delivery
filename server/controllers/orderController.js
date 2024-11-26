import { OrderModel } from "../model/orderModel.js";

const createOrder = async (req, res) => {
  const newOrder = await OrderModel.create(req.body);
  res.status(201).json({ success: true, result: newOrder });
};

const getOrders = async (_, res) => {
  const orders = await OrderModel.find();
  res.status(200).json({ success: true, result: orders });
};

const updateOrder = async (req, res) => {
  try {
    const { _id, foods, totalPrice, createdDate, district, khoroo, apartment } =
      req.body;
    const result = await OrderModel.findById(_id);
    if (foods) result.foods = foods;
    if (totalPrice) result.totalPrice = totalPrice;
    if (createdDate) result.createdDate = createdDate;
    if (district) result.district = district;
    if (khoroo) result.khoroo = khoroo;
    if (apartment) result.apartment = apartment;
    const updateFields = await OrderModel.findByIdAndUpdate(_id, result, {
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
