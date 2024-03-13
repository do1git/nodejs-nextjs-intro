import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import Link from "next/link";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export const metadata = {
  title: "hOmE",
};

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // const res = await fetch(URL);
  // const json = await res.json();
  return await fetch(API_URL).then((res) => res.json());
}

export default async function HomePage() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState();
  // const getMovies = async () => {
  //   const response = await fetch(URL);
  //   const json = await response.json();
  //   setMovies(json);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   getMovies();
  // });
  const movies = await getMovies();
  return (
    <div>
      <p>TOP MOVIES</p>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      {/* {isLoading ? "Loading..." : JSON.stringify(movies)} */}
    </div>
  );
}
