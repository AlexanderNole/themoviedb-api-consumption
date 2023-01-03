import styles from "../styles/MovieCard.module.css";
import { Link } from "react-router-dom";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className={styles["movie-card"]}>
      <Link to={`/movie/ ${movie.id}`}>
        <img
          src={imageUrl}
          alt={movie.title}
          width={230}
          height={345}
          className={styles["movie-img"]}
        />
      </Link>
      <div className={styles["title"]}>{movie.title}</div>
    </li>
  );
}
