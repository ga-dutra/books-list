import { Request, Response, NextFunction } from "express";
import { getBookById } from "../repositories/books.repositories.js";

async function validateBookId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  if (!id) {
    return res.status(404).send({ error: "book id is necessary" });
  }

  try {
    const existingBook = (await getBookById(Number(id))).rows[0];

    if (!existingBook) {
      return res.status(404).send({ error: "book was not found" });
    }
    next();
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

export { validateBookId };
