//database table
export type BookEntity = {
  id: number;
  title: string;
  author: string;
  read: boolean;
  score: number | null;
  overview: string | null;
};

export type Book = Omit<BookEntity, "id">;
