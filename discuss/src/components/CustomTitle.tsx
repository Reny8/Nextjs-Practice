"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
export default function CustomTitle({ title }: { title: string }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("term");
  return (
    <Suspense>
      <h1 className="text-xl m-2">
        {search ? `Result for : ${search}` : title}
      </h1>
    </Suspense>
  );
}
