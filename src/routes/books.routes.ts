import express from "express";
import {
  getBooks,
  avaliateBook,
  createBook,
} from "../controllers/books.controllers.js";
import { validateBookId } from "../middlewares/books.middlewares.js";

const router = express.Router();

router.get("/books", getBooks);
router.put("/books/:id", validateBookId, avaliateBook);
router.post("/books", createBook);

export default router;
