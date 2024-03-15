"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
type Props = {};

export default function SearchBox({}: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e:React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    router.push(`/search/${search}`)
  }
  return (
    <form className="flex justify-between px-5 max-w-6xl mx-auto" onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search Keywords ...."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button className="text-amber-600 disable:text-gray-400" disabled={search === ""}>
        Search
      </button>
    </form>
  );
}
