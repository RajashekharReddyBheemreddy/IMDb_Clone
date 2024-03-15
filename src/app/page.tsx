import Card from "@/components/Card";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = data.results;

  return (
    <div className="sm: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 max-w-6xl mx-auto py-4 w-full">
      {result.map((result: any) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
