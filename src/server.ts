import express from "express";
import booksRouter from "./routes/books.routes.js";

const app = express();

app.use(express.json());
app.use(booksRouter);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
