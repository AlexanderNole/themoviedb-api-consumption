const API = "https://api.themoviedb.org/3";

export async function get(path) {
  const result = await fetch(API + path, {
    headers: {
      Authorization: "Enter your authorization token",
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await result.json();
}
