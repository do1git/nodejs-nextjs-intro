"client use";

import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

export const metadata = {
  title: "DETAIL",
};

// const ComponentName = async()=>{}
// 로딩을 사용할 것임으로 비동기 함수로 만든다
export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);
  // const movie = await getMovie(id);
  // const video = await getVideos(id);
  return (
    <div>
      {/* <h1>Movie {id} </h1>
      <h2>{movie.title}</h2> */}
      <Suspense fallback={<h1>Loading Info...!</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Videos...!</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
