"client use";

import { API_URL } from "../../../(home)/page";

export const metadata = {
  title: "DETAIL",
};

const getMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// const ComponentName = async()=>{}
// 로딩을 사용할 것임으로 비동기 함수로 만든다
export default async function MovieDetail({
  params: { id },
}: {
  9;
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return (
    <div>
      <h1>Movie {id} </h1>
      <h2>{movie.title}</h2>
    </div>
  );
}
