import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { Tour } from "@/types";

const TourItem = ({ data }: { data: Tour }) => {
  const [imgSrc, setImgSrc] = useState(data.imageUrl ?? "/images/placeholder.png");

  return (
    <div className="">
      <div className="overflow-hidden rounded-2xl">
        <Link href={"/"}>
          <Image
            onError={() => setImgSrc("/images/placeholder.png")}
            src={imgSrc}
            alt={data.title}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="aspect-3/2 w-full cursor-pointer object-cover hover:scale-110 hover:duration-200"
            quality={100}
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </Link>
      </div>
      <div>
        <Link href={"/"} className="cursor-pointer">
          {data.title}
        </Link>
      </div>
      <span>{data.priceBase}</span>
    </div>
  );
};

export default TourItem;
