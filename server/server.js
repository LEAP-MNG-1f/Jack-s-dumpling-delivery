import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import foodRouter from "./routes/foodRoute.js";
import categoryRouter from "./routes/categoryRoute.js";
// dotenv
dotenv.config();
// connect to MongoDB
mongoose.connect(
  "mongodb+srv://jamka888:80060793@test1120.nwyip.mongodb.net/food-delivery"
);

// server
const server = express();
const PORT = 8000;
server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
server.use("/api", orderRouter);
server.use("/api", foodRouter);
server.use("/api", categoryRouter);

server.get("/", async (_, res) => {
  res.send("working");
});

server.listen(PORT, () => {
  console.log(`server is working on http://localhost:${PORT}`);
});
