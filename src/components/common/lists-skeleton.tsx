import { Skeleton } from "../ui/skeleton";

import CardSkeleton from "./card-skeleton";

const ListSkeleton = () => {
  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_) => (
          <div className="mr-3 mb-8 flex flex-col" key={`skeleton-row-${_}-${Math.random()}`}>
            <CardSkeleton />
            <CardSkeleton />
          </div>
        ))}
      </div>
      <div className="*:dark:bg-accent flex items-center justify-center gap-3 *:bg-gray-400">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-10" />
        <Skeleton className="h-8 w-10" />
        <Skeleton className="h-8 w-20" />
      </div>
    </>
  );
};

export default ListSkeleton;
