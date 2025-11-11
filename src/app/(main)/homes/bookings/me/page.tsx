import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";

import { getBookingsByUser } from "@/actions";
import ListBookings from "@/components/homes/booking/get-list-bookings";
import { authOptions } from "@/lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/auth/login");
  }

  const data = await getBookingsByUser();

  if (!data) return <p>No data.</p>;

  return <ListBookings data={data} />;
};

export default page;
