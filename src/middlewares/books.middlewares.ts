import { Request, Response, NextFunction } from "express";
import { getBookById } from "../repositories/books.repositories.js";

async function validateBookId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  try {
    const existingBook = (await getBookById(Number(id))).rows[0];

    if (!existingBook) return res.sendStatus(404);
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { validateBookId };
