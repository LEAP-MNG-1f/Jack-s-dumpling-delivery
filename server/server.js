import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

const server = express();
const PORT = 8000 || process.env.DB_URL;

server.use(cors());
server.use(bodyParser.json());

server.get("/", (_, res) => {
  res.status(200).json("API server is working");
});

server.listen(PORT, () => {
  console.log(`API server is working this path http://localhost:${PORT}`);
});
