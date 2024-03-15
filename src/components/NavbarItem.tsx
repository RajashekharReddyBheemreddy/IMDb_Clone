"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
type Props = {
  title: string;
  param: string;
};

export default function NavbarItem({ title, param }: Props) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
            : null
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
