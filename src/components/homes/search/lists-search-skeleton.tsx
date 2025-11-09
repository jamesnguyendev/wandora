import CardSkeleton from "@/components/common/card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const ListSearchSkeleton = () => {
  return (
    <div className="">
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_) => (
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
    </div>
  );
};

export default ListSearchSkeleton;
