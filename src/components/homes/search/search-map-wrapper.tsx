"use client";

import dynamic from "next/dynamic";

const SearchMap = dynamic(() => import("@/components/homes/search/search-map"), {
  ssr: false,
  loading: () => (
    <div className="hidden h-[600px] items-center justify-center overflow-hidden rounded-xl bg-gray-100 md:flex">
      <p className="text-gray-500">Loading the map...</p>
    </div>
  ),
});

export default function SearchMapWrapper() {
  return <SearchMap />;
}
