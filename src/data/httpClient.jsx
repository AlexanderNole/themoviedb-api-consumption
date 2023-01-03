const API = "https://api.themoviedb.org/3";

export async function get(path) {
  const result = await fetch(API + path, {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjI0OGJkZWEwMWFiOTc5YWVhNjM3MjA5OGNmYjMxZCIsInN1YiI6IjYzYjBmZmFhNTc1MzBlMDBjNDgyMTdjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5hP0tuZwR0KaZ0ZYQt0k9E7XElMjLOZ3A8l5l9T5iNE",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await result.json();
}
