import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cloudinary from "cloudinary";
import connectDb from "./connectDB.js";
import mongoose from "mongoose";

import userRouter from "./routes/userRoute.js";

config();

const server = express();
const PORT = 8000 || process.env.DB_URL;
server.use(cors());
server.use(bodyParser.json());

server.use("/api", userRouter);
mongoose.connect(
  "mongodb+srv://ace12d192:wap3TZLOZeJlgLIq@cluster0.s6jvj.mongodb.net/food-delivery"
);

server.listen(PORT, () => {
  console.log(`API server is working this path http://localhost:${PORT}`);
});

// const cloudinaryURL = new URL(process.env.CLOUDINARY_URL);
// cloudinary.config({
//   cloud_name: cloudinaryURL.hostname,
//   api_key: cloudinaryURL.username,
//   api_secret: cloudinaryURL.password,
// });

// server.get("/", (_, res) => {
//   res.status(200).json("API server is working");
// });

// server.post("/image", async (_, res) => {
//   try {
//     const uploudResult = await cloudinary.uploader.upload("assets/egg.png", {
//       public_id: "cook",
//     });
//     res.status(200).json({ success: true, file: uploudResult.url });
//     console.log(uploudResult);
//   } catch (error) {
//     console.log("error", error);
//   }
// });

// server.post("/", async (req, res) => {
//   try {
//     const data = await connectDb();
//     let collection = data.collection("product");

//     let results = await collection.findOneAndDelete({ owner: "sarnaiB" });

//     res.json({ success: true, data: results });
//   } catch (error) {
//     console.log(error);
//   }
// });

// server.post("/create-user", async (req, res) => {
//   const data = await connectDb();
//   let collection = data.collection("users");
// });

// server.post("/create", async (req, res) => {
//   const result = await animeModel.create({
//     name: "aa",
//     year: 1220,
//   });
//   res.json({ success: "true", data: result });
// });

// server.delete("/delete", async (req, res) => {
//   const result = await animeModel.findMany({
//     _id: "%1%",
//   });
//   res.json({ results: result });
// });
