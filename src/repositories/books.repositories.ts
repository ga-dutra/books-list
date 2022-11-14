import { QueryResult } from "pg";
import { Book, BookAvaliation, BookEntity } from "../protocols/books.js";
import connection from "../database/database.js";

async function listBooks(genre = null): Promise<QueryResult<BookEntity>> {
  if (genre) {
    return await connection.query(
      `SELECT * FROM books WHERE LOWER("genre") = $1;`,
      [genre.toLowerCase()]
    );
  }
  return await connection.query(`SELECT * FROM books`);
}

async function updateBook(
  bookId: number,
  avaliation: BookAvaliation
): Promise<QueryResult> {
  return await connection.query(
    `UPDATE books 
     SET read = TRUE, 
     score = &1, 
     overview = $2 
     WHERE id = &3;`,
    [avaliation.score, avaliation.overview, bookId]
  );
}

async function getBookById(bookId: number): Promise<QueryResult> {
  return await connection.query(`SELECT * FROM books WHERE id = $1;`, [bookId]);
}

async function insertNewBook(book: Book): Promise<QueryResult> {
  return await connection.query(
    `INSERT INTO books (title, author, genre) VALUES ($1, $2, $3);`,
    [book.title, book.author, book.genre]
  );
}

async function removeBook(bookId: number): Promise<QueryResult> {
  return await connection.query(`DELETE FROM books WHERE id = $1;`, [bookId]);
}

async function listBooksByGenre(): Promise<QueryResult<BookEntity>> {
  return await connection.query(`SELECT LOWER(books.genre) 
  AS genre, 
  COUNT(*) AS "booksQuantity" 
  FROM books 
  GROUP BY LOWER(books.genre);`);
}

export {
  listBooks,
  updateBook,
  getBookById,
  insertNewBook,
  removeBook,
  listBooksByGenre,
};
