import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";
import Link from "next/link";
import Movie from "../../components/movie";
import { API_URL } from "../constants";

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
          {/* <Link href={`/movies/${movie.id}`}>{movie.title}</Link> */}
          <Movie
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_p2ath}
            title={movie.title}
          />
        </li>
      ))}
      {/* {isLoading ? "Loading..." : JSON.stringify(movies)} */}
    </div>
  );
}
