import {Schema, SchemaTypes, model} from "mongoose";

const EnumProcess = ["waiting", "cooking", "delivery"];

const orderSchema =  Schema({
  userID:{type:SchemaTypes.ObjectId, ref:"user", required:true},
  orderNumber: { type: Number, required: true },
  foods: { type: [SchemaTypes.ObjectId], ref: "Food",required: true },
  totalPrice: { type: Number, required: true },
  process: { type: String, enum: EnumProcess, default: "waiting" },
  createdDate: { type: Date, required: true },
  district: { type: String, required: true },
  khoroo: { type: String, required: true },
  apartment: { type: String, required: true },
});

export const OrderModel = model("Order", orderSchema);
