import { User } from "../model/sa.js";

const createUser = async (_, response) => {
  const result = await User.create({
    name: "asdcas",
    email: "scadcas",
    password: "sacsa",
    phoneNumber: 123456,
  });
  response.json({
    success: true,
    data: result,
  });
};

const get = async (req, res) => {
  const result = await User.find();
  res.json({ success: true, data: result });
  console.log(result);
};

export { createUser, get };
