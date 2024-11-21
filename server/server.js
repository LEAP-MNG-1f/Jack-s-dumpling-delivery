import express, { response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cloudinary from "cloudinary";
import connectDb from "./connectDB.js";
config();

const server = express();
const PORT = 8000 || process.env.DB_URL;
// const cloudinaryURL = new URL(process.env.CLOUDINARY_URL);
// cloudinary.config({
//   cloud_name: cloudinaryURL.hostname,
//   api_key: cloudinaryURL.username,
//   api_secret: cloudinaryURL.password,
// });

server.use(cors());
server.use(bodyParser.json());
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

server.get("/", async (_, res) => {
  const db = await connectDb();
  console.log(db);
  
  // let collection = db.collection("comments");
  // let results = await collection.find().limit(10).toArray();
  // response.json({ success: true, data: results });
 
});

server.listen(PORT, () => {
  console.log(`API server is working this path http://localhost:${PORT}`);
});
