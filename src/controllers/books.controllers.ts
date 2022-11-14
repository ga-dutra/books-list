import { Request, Response } from "express";
import { Book, BookAvaliation, BookEntity } from "../protocols/books.js";
import { BookSchema } from "../schemas/books.schemas.js";
import {
  insertNewBook,
  listBooks,
  updateBook,
  removeBook,
} from "../repositories/books.repositories.js";

async function getBooks(req: Request, res: Response) {
  try {
    const books = (await listBooks()).rows;
    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function avaliateBook(req: Request, res: Response) {
  const { id } = req.params;
  const avaliation = req.body as BookAvaliation;

  try {
    await updateBook(Number(id), avaliation);
    return res.status(200).send({ message: "book avaliated" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function createBook(req: Request, res: Response) {
  const newBook = req.body as Book;

  const newBookValidation = BookSchema.validate(newBook, { abortEarly: false });

  if (newBookValidation.error) {
    const errors = newBookValidation.error.details.map(
      (details) => details.message
    );
    return res.status(422).send(errors);
  }

  try {
    await insertNewBook(newBook);
    return res.status(201).send({ message: "new book created" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteBook(req: Request, res: Response) {
  const { id } = req.params;
  try {
    await removeBook(Number(id));
    return res.status(200).send({ message: "book deleted" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { getBooks, avaliateBook, createBook, deleteBook };
