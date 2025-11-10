import SearchListings from "@/components/homes/search/search-listings";
import SearchMapCustom from "@/components/homes/search/search-map-custom";

import "leaflet/dist/leaflet.css";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
  const search = await searchParams;
  const query = search.q;

  if (!query) return <p>No result</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <SearchListings keyword={encodeURIComponent(query)} search={true} />
      <SearchMapCustom />
    </div>
  );
}
