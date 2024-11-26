import { UserModel } from "../model/userModel.js";

const getUsers = async (_, res) => {
  const result = await UserModel.find();
  res.status(200).json({ success: true, data: result });
};

const createUser = async (req, res) => {
  const result = await UserModel.insertMany(req.body);
  res.status(201).json({ success: true, data: result });
};

const deleteUser = async (req, res) => {
  const result = await UserModel.findOneAndDelete({ _id: req.body });
  res.status(201).json({ success: true, data: result });
};
const updateUser = async (req, res) => {
  const { _id, name, email, password, phoneNumber } = req.body;

  if (!_id) {
    return console.log("id is required");
  }

  const updateFields = {};
  if (name) updateFields.name = name;
  if (email) updateFields.email = email;
  if (password) updateFields.password = password;
  if (phoneNumber) updateFields.phoneNumber = phoneNumber;

  const result = await UserModel.findByIdAndUpdate(_id, updateFields, {
    new: true,
  });
  res.status(201).json({ success: true, data: result });
};

export { createUser, getUsers, deleteUser, updateUser };
