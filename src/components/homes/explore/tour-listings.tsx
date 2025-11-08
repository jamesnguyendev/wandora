"use client";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getTours } from "@/actions";
import ListSkeleton from "@/components/common/lists-skeleton";
import PaginateData from "@/components/common/paginate-data";
import { Tour } from "@/types";

import TourItem from "./tour-item";

export const TourListings = () => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { isLoading, error, data } = useQuery({
    queryKey: ["tourData", page],
    queryFn: async () => {
      const data = await getTours(page, limit);

      return data;
    },
  });

  if (isLoading) return <ListSkeleton />;

  if (error) {
    throw new Error("An error has occurred: " + error.message);
  }

  return (
    <div>
      <div className="my-5 font-bold md:text-lg">Recommended for you </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.data.map((item: Tour) => (
          <div key={item.id} className="mr-3 mb-8 flex flex-col">
            <TourItem data={item} />
          </div>
        ))}
      </div>

      <PaginateData currentPage={page} totalPages={data.totalPages} onPageChange={(p) => setPage(p)} />
    </div>
  );
};

export default TourListings;
