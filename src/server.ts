import express from "express";
import dotenv from "dotenv";
import booksRouter from "./routes/books.routes.js";

const app = express();

app.use(express.json());
app.use(booksRouter);

dotenv.config();

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
