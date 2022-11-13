import { Request, Response } from "express";
import { BookEntity } from "src/protocols/books.js";
import { listBooks } from "../repositories/books.repositories.js";

async function getBooks(req: Request, res: Response) {
  try {
    const books = (await listBooks()).rows;
    return res.status(200).send(books);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { getBooks };
