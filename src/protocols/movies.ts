//database table
export type MovieEntity = {
  id: number;
  title: string;
  platform: string;
  genre: string;
  watched: boolean;
  score: number | null;
  overview: string | null;
};

export type Movie = Omit<MovieEntity, "id">;
