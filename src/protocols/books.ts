//database table
export type BookEntity = {
  id: number;
  title: string;
  author: string;
  genre: string;
  read: boolean;
  score: number | null;
  overview: string | null;
};

export type Book = Omit<BookEntity, "id" | "read" | "score" | "overview">;

export type BookAvaliation = {
  name?: string;
  score: number;
  overview: string;
};
