"use client";

import * as React from "react";
import { useId } from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "../../input";
import { Button } from "../../button";

export interface Navbar14Props extends React.HTMLAttributes<HTMLElement> {
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
}

export const SearchBar = React.forwardRef<HTMLElement, Navbar14Props>(
  ({ className, searchPlaceholder = "Search...", searchValue, onSearchChange, ...props }, ref) => {
    const id = useId();

    return (
      <div className={`${className}`}>
        <form className="flex items-center justify-center gap-1.5" action={"/search"}>
          <Input
            id={`input-${id}`}
            className="peer text-foreground h-max w-full max-w-xl border-gray-300 bg-gray-100 px-2 py-1.5"
            placeholder={searchPlaceholder}
            type="search"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
            name="query"
          />
          <Button type="submit" variant={"default"} className="cursor-pointer rounded-lg">
            <SearchIcon />
          </Button>
        </form>
      </div>
    );
  },
);
