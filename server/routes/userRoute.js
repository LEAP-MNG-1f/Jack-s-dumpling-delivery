import express from "express";
import { createUser, get } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/createuser", createUser);
userRouter.get("/getusers", get);

export default userRouter;
