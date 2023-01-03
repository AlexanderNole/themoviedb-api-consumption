import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../styles/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  const dataMovies = () => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  };
  
  useEffect(dataMovies, []);
  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
}
