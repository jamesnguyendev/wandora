"use client";

import { useQuery } from "@tanstack/react-query";

import { getTours } from "@/actions";
import { Tour } from "@/types";

import TourItem from "./tour-item";

export const TourListings = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tourData"],
    queryFn: async () => {
      const data = await getTours(1, 10);

      return data.data;
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <div className="my-5 font-bold md:text-lg">Recommended for you </div>

      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item: Tour) => (
          <div key={item.id} className="mr-3 mb-8 flex flex-col">
            <TourItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourListings;
