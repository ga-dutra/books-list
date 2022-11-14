import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import booksRouter from "./routes/books.routes.js";
dotenv.config();
var app = express();
app.use(express.json()).use(cors());
app.use("", booksRouter);
var PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, function () {
    console.log("Listening on port", PORT);
});
