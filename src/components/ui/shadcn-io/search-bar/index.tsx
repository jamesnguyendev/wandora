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
        <div className="flex items-center justify-center gap-1.5">
          <Input
            id={`input-${id}`}
            className="peer h-max w-full max-w-xl border-gray-300 px-2 py-1.5 bg-gray-100"
            placeholder={searchPlaceholder}
            type="search"
            value={searchValue}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
          <Button variant={"default"} className="cursor-pointer rounded-lg">
            <SearchIcon />
          </Button>
        </div>
      </div>
    );
  },
);
