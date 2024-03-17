"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";
interface IMovieProps {
  title: string;
  id: string;
  posterPath: string;
}

export default function Movie({ title, id, posterPath }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div className={styles.movie} onClick={onClick}>
      <img src={posterPath} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
