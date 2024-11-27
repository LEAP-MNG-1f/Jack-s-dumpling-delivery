import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
const userRouter = express.Router();

userRouter.post("/user", createUser);
userRouter.get("/users", getUsers);
userRouter.delete("/user", deleteUser);
userRouter.put("/user", updateUser);

export  {userRouter}
