import { UserModel } from "../model/user.model.js";

const getUsers = async (_, res) => {
  const result = await UserModel.find();
  res.status(200).json({ success: true, data: result });
};

const createUser = async (req, res) => {
  const result = await UserModel.create(req.body);
  res.status(201).json({ success: true, data: result });
};


const deleteUser = async (req, res) => {
  const result = await UserModel.findOneAndDelete({ _id: req.body });
  res.status(201).json({ success: true, data: result });
};

const updateUser = async (req, res) => {
  const result = await UserModel.findByIdAndUpdate(req.body);
  res.status(201).json({ success: true, data: result });
};

export { createUser, getUsers, deleteUser, updateUser };
