import Card from "@/components/Card";
import React from "react";

type Props = {
  params: any;
};

export default async function page({ params }: Props) {
  const searchTerm: string = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const result = data.results;

  return (
    <div>
      {result && result.length === 0 ? (
        <h1 className="text-center pt-6">No results found</h1>
      ) : (
        <>
          <div className="sm: grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl-grid-cols-5 max-w-6xl mx-auto py-4 w-full">
            {result.map((result: any) => (
              <Card key={result.id} result={result} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
