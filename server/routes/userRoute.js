import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/createuser", createUser);
userRouter.get("/users", getUsers);
userRouter.delete("/deleteuser", deleteUser);
userRouter.put("/updateuser", updateUser);

export default userRouter;
