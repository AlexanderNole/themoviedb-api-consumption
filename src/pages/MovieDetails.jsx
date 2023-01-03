import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieImg } from "../utils/getMovieImg";
import "../styles/MovieDetails.css";

export function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  const dataMovie = () => {
    get(`/movie/${id}`).then((data) => {
      setMovie(data);
      setGenres(data.genres);
    });
  };

  useEffect(dataMovie, []);
  const imgUrl = getMovieImg(movie.poster_path, 500);
  const lastGenre = [...genres].pop();

  let allGenres = "";
  genres.forEach((genre) =>
    genres.indexOf(genre) === genres.indexOf(lastGenre)
      ? (allGenres += `${genre.name}.`)
      : (allGenres += `${genre.name}, `)
  );

  return (
    <div className="details-container">
      <img src={imgUrl} alt={movie.title} className="movie-img columns" />
      <div className="movie-details columns">
        <p className="title">
          {movie.title}
        </p>
        <p>
          <strong>Géneros: </strong>
          {allGenres}
        </p>
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
