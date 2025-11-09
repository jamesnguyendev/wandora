"use client";

import * as React from "react";
import { useId } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../../input";
import { Button } from "../../button";
import { useRouter } from "next/navigation";

export interface Navbar14Props extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
}

export const SearchBar = React.forwardRef<HTMLElement, Navbar14Props>(
  ({ className, searchPlaceholder = "Search...", ...props }, ref) => {
    const id = useId();

    const router = useRouter();
    const [query, setQuery] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (query.trim()) {
        router.push(`/homes/search?q=${encodeURIComponent(query)}`);
      }
    };

    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-1.5">
          <Input
            id={`input-${id}`}
            className="peer text-foreground h-max w-full max-w-xl border-gray-300 bg-gray-100 px-2 py-1.5"
            placeholder={searchPlaceholder}
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
      </div>
    );
  },
);
