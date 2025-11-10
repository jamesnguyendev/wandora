import { Skeleton } from "@/components/ui/skeleton";

const ListSearchSkeleton = () => {
  return (
    <div className="mr-3 md:col-span-2">
      <Skeleton className="dark:bg-accent my-4 h-8 w-32 bg-gray-400" />
      {Array.from({ length: 2 }).map((_) => (
        <div
          className="*:dark:bg-accent mb-8 grid grid-cols-2 gap-3 *:bg-gray-400 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
          key={`skeleton-row-${_}-${Math.random()}`}
        >
          <Skeleton className="h-50 w-full" />
          <Skeleton className="h-50 w-full" />
          <Skeleton className="h-50 w-full" />
        </div>
      ))}

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
