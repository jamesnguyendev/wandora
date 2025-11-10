import { getTour } from "@/actions";
import TourCalendar from "@/components/homes/detail/tour-calendar";
import { Tour } from "@/types";

interface PageProps {
  params: { id: string };
}

export default async function page({ params }: PageProps) {
  const paramsId = await params;
  const id = paramsId.id;

  const Tour = await getTour(id);

  if (!Tour.data) return <p>No found data!</p>;

  const data: Tour = Tour.data;

  return <TourCalendar data={data} />;
}
