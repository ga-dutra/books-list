import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "124816",
  database: "poc-bookslist",
});

// const databaseConfig = {
// connectionString: process.env.DATABASE_URL,
// ssl: {
//   rejectUnauthorized: false,
// },
// }

// const connection = new Poll(databaseConfig);
export default connection;
