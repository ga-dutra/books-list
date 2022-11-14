import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import booksRouter from "./routes/books.routes.js";

dotenv.config();

const app = express();

app.use(express.json()).use(cors());
app.use("", booksRouter);

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
