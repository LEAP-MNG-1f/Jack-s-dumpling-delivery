import { Schema, model } from "mongoose";

const roleEnum = ["admin", "user"];

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  role: { type: String, enum: roleEnum, required: true, default: "user" },
});

export const UserModel = model("User", userSchema);
