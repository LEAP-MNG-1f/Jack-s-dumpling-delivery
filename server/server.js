import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cloudinary from "cloudinary";
config();

const server = express();
const PORT = 8000 || process.env.DB_URL;
const cloudinaryURL = new URL(process.env.CLOUDINARY_URL);
cloudinary.config({
  cloud_name: cloudinaryURL.hostname,
  api_key: cloudinaryURL.username,
  api_secret: cloudinaryURL.password,
});
server.use(cors());
server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.status(200).json("API server is working");
});

server.post("/image", async (_, res) => {
  try {
    const uploudResult = await cloudinary.uploader.upload("assets/egg.png", {
      public_id: "cook",
    });
    res.status(200).json({ success: true, file: uploudResult.url });
    console.log(uploudResult);
  } catch (error) {
    console.log("error", error);
  }
});

server.listen(PORT, () => {
  console.log(`API server is working this path http://localhost:${PORT}`);
});
