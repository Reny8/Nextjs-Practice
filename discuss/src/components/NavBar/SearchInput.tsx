"use client";
import { Button, Input } from "@nextui-org/react";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import Search from "@/icons/Search";
export default function SearchInput() {
  const searchTerm = useSearchParams().get("term") || "";
  const [search, setSearch] = useState(searchTerm);

  function updateQueryParams(search: string) {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("term")) {
      searchParams.set("term", search);
    } else {
      searchParams.append("term", search);
    }

    window.history.pushState({}, "", "?" + searchParams.toString());
  }
  return (
    <Suspense>
      <Input
        type="text"
        placeholder="Search"
        className="w-96"
        defaultValue={searchTerm}
        onChange={(e) => setSearch(e.target.value)}
        endContent={
          <Button
            isIconOnly
            variant="light"
            onClick={() => updateQueryParams(search)}
          >
            <Search />
          </Button>
        }
      />
    </Suspense>
  );
}
