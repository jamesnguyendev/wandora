import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="my-16 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      <Skeleton className="h-60 w-full" />
      <Skeleton className="h-full w-full" />
      <Skeleton className="h-full w-full" />
      <Skeleton className="h-full w-full" />
    </div>
  );
};

export default loading;
