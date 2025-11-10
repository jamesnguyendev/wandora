import Image from "next/image";

import { Tour } from "@/types";

const TourInfo = ({ data }: { data: Tour }) => {
  return (
    <div className="flex gap-1.5">
      <Image alt="" height={80} width={100} src={data.imageUrl || "/images/placeholder.png"} className="rounded-lg" />
      <div className="flex flex-col">
        <span className="text-lg font-bold">{data.title}</span>
        <span className="text-sm text-gray-500">${data.priceBase}</span>
        <span className="text-sm text-gray-500">Type: {data.type}</span>
      </div>
    </div>
  );
};

export default TourInfo;
