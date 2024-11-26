import mongoose from "mongoose";

const EnumProcess = ["waiting", "cooking", "delivery"];

const orderSchema = new mongoose.Schema({
  orderNumber: { type: Number, required: true },
  foods: { type: [String], required: true },
  totalPrice: { type: Number, required: true },
  process: { type: String, enum: EnumProcess, default: "waiting" },
  createdDate: { type: Date, required: true },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
});

export const OrderModel = mongoose.model("order", orderSchema);
