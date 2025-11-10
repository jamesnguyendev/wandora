"use client";

import { useState, useId } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "lucide-react";
import { useDebounce } from "use-debounce";

import { getSearchTours } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Listing {
  id: string;
  title: string;
  priceBase: number;
  imageUrl?: string;
  type: string;
}

const SearchBox = () => {
  const id = useId();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/homes/search?q=${encodeURIComponent(query)}`);
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["searchTours", debouncedQuery],
    queryFn: () => getSearchTours(1, 5, debouncedQuery),
    enabled: !!debouncedQuery,
    staleTime: 60 * 1000,
  });

  const listings = data?.data?.listings;

  return (
    <div className={`relative hidden w-full lg:block`}>
      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-1.5">
        <Input
          id={`input-${id}`}
          className="peer text-foreground h-max w-full max-w-xl border-gray-300 bg-gray-100 px-2 py-1.5"
          placeholder={"Search by name or description"}
          type="search"
          required
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          name="q"
        />
        <Button type="submit" variant={"default"} className="cursor-pointer rounded-lg">
          <SearchIcon />
        </Button>
      </form>

      {query && (
        <div className="absolute top-10 right-1/2 left-1/2 z-50 mt-1 w-1/2 -translate-x-1/2 rounded-md border bg-white shadow-md">
          {isLoading && <p className="text-muted-foreground p-3 text-sm">Searching...</p>}

          {!isLoading && debouncedQuery && listings.length === 0 && (
            <p className="text-muted-foreground p-3 text-sm">No results found.</p>
          )}

          {!isLoading &&
            listings?.map((item: Listing) => (
              <Link
                href={`/homes/detail/${item.id}`}
                key={item.id}
                className={cn("hover:bg-muted block cursor-pointer p-3 transition-all")}
                onClick={() => setQuery("")}
              >
                <div className="flex gap-2">
                  <Image
                    src={item.imageUrl || "/images/placeholder.png"}
                    alt={item.title}
                    width={55}
                    height={45}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-muted-foreground text-sm">
                      {item.type} · ${item.priceBase}/night
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
