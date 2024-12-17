export type Movie = {
  _id: string;
  title: string;
  poster: string;
  imdb: { rating: string };
  runtime: string;
  year: string;
  genres: string[];
  directors: string[];
  cast: string[];
  countries: string[];
  languages: string[];
  fullplot: string;
  plot: string;
};
export type Comment = {
  _id: string;
  name: string;
  email: string;
  movie_id: string;
  text: string;
  date: string;
};
