"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import "leaflet/dist/leaflet.css";
import { useTourStore } from "@/stores/search/search";
import { Tour } from "@/types";

const SearchMapCustom = () => {
  const [leafletComponents, setLeafletComponents] = useState<any>(null);
  const tours = useTourStore((state) => state.tours);

  useEffect(() => {
    (async () => {
      const L = (await import("leaflet")).default;
      const { MapContainer, TileLayer, Marker, Popup } = await import("react-leaflet");

      const customIcon = new L.Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
        iconSize: [30, 35],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40],
      });

      setLeafletComponents({ L, MapContainer, TileLayer, Marker, Popup, customIcon });

      setTimeout(() => window.dispatchEvent(new Event("resize")), 300);
    })();
  }, []);

  if (!leafletComponents) {
    return (
      <div className="dark:bg-accent hidden h-[600px] items-center justify-center overflow-hidden rounded-xl bg-gray-400 md:flex">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, customIcon } = leafletComponents;

  if (!(tours as any).listings) return null;

  return (
    <div className="z-20 hidden h-[600px] overflow-hidden rounded-xl md:block">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="h-full w-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {(tours as any).listings.map((listing: Tour) => (
          <Marker key={listing.id} position={[listing.latitude, listing.longitude]} icon={customIcon}>
            <Popup>
              <div className="flex flex-col items-center">
                <Link href={"/"}>
                  <Image
                    src={listing.imageUrl || "/images/placeholder.png"}
                    alt={listing.title}
                    className="w-full rounded object-cover hover:opacity-80"
                    width={100}
                    height={20}
                    quality={100}
                  />
                </Link>
                <div className="mt-2 flex flex-col">
                  <Link href={"/"} className="line-clamp-1 font-semibold hover:underline">
                    <span className="text-black">{listing.title}</span>
                  </Link>
                  <span className="font-momo line-clamp-1 text-xs">${listing.priceBase}</span>
                  <span className="font-momo line-clamp-1 text-xs">Type: {listing.type}</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default SearchMapCustom;
