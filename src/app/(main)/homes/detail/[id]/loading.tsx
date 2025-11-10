import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex justify-center">
      <div className="my-10 w-full rounded-lg border p-10 md:w-1/2 lg:w-2/4">
        <div className="flex gap-3">
          <Skeleton className="h-16 w-24" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="h-3 w-10" />
            <Skeleton className="h-3 w-10" />
          </div>
        </div>

        <div className="my-5 flex flex-col gap-3 xl:flex-row">
          <Skeleton className="h-80 w-full" />
          <Skeleton className="h-80 w-full" />
        </div>

        <Skeleton className="my-3 h-2 w-full" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="my-3 h-2 w-full" />

        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
};

export default loading;
