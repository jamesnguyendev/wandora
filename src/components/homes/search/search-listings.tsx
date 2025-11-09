"use client";

import { useState, useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { getSearchTours } from "@/actions";
import PaginateData from "@/components/common/paginate-data";
import { useTourStore } from "@/stores/search/search";
import { Tour } from "@/types";

import TourItem from "../explore/tour-item";

import ListSearchSkeleton from "./lists-search-skeleton";

export const SearchListings = ({ keyword, search }: { keyword: string; search: boolean }) => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const setTours = useTourStore((state) => state.setTours);

  const { isLoading, error, data } = useQuery({
    queryKey: ["tourSearchData", page],
    queryFn: async () => {
      const data = await getSearchTours(page, limit, keyword);

      return data.data;
    },
  });

  useEffect(() => {
    if (data) {
      setTours(data);
    }
  }, [data, setTours]);

  if (isLoading) return <ListSearchSkeleton />;

  if (error) {
    throw new Error("An error has occurred: " + error.message);
  }

  if (!data?.listings || data.listings.length === 0) return <p>No tours found</p>;

  return (
    <div className="md:col-span-2">
      <div className="my-5 font-bold md:text-lg">Recommended for you </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {data.listings.map((item: Tour) => (
          <div key={item.id} className="mr-3 mb-8 flex flex-col">
            <TourItem data={item} search={search} />
          </div>
        ))}
      </div>

      <PaginateData currentPage={page} totalPages={data.totalPages} onPageChange={(p) => setPage(p)} />
    </div>
  );
};

export default SearchListings;
