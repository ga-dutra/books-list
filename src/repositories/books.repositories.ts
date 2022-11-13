import { QueryResult } from "pg";
import { BookEntity } from "src/protocols/books.js";
import connection from "../database/database.js";

async function listBooks(): Promise<QueryResult<BookEntity>> {
  return await connection.query(`SELECT * FROM books`);
}

export { listBooks };
