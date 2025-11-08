import { Skeleton } from "../ui/skeleton";

const CardSkeleton = () => {
  return (
    <div className="mb-10 flex flex-col gap-3 *:bg-gray-400 *:dark:bg-gray-500">
      <Skeleton className="h-40 w-full rounded-xl" />
      <Skeleton className="h-5 w-1/2 rounded-sm" />
      <Skeleton className="h-5 w-1/3 rounded-sm" />
    </div>
  );
};

export default CardSkeleton;
