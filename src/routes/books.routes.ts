import express from "express";
import {
  getBooks,
  avaliateBook,
  createBook,
  deleteBook,
  filterByGenre,
} from "../controllers/books.controllers.js";
import { validateBookId } from "../middlewares/books.middlewares.js";

const router = express.Router();

router.get("/books", getBooks);
router.put("/books/:id", validateBookId, avaliateBook);
router.post("/books", createBook);
router.delete("/books/:id", validateBookId, deleteBook);
router.get("/books-by-genre", filterByGenre);

export default router;
