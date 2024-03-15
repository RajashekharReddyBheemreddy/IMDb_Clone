"use client";

import { useEffect } from "react";

type Props = {
  error?: string;
  reset?:any ;
};

export default function error({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center mt-10">
      <h1>Some thing went wrong. Please try again.</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
