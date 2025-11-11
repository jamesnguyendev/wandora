"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { createBooking } from "@/actions";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { bookingSchema } from "@/schema/booking.schema";
import { Tour } from "@/types";

import TourInfo from "./tour-info";

type BookingForm = z.infer<typeof bookingSchema>;

const TourCalendar = ({ data }: { data: Tour }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      checkIn: undefined,
      checkOut: undefined,
    },
  });

  const checkIn = form.watch("checkIn");
  const checkOut = form.watch("checkOut");

  const isDisplayPrice = checkIn && checkOut ? data.priceBase : 0;

  const onSubmit = async (values: BookingForm) => {
    if (!session?.user) return router.push("/auth/login");

    const payload = {
      userId: session?.user.id,
      listingId: data.id,
      totalPrice: data.priceBase,
      startDate: values.checkIn,
      endDate: values.checkOut,
    };
    setLoading(true);
    const res = await createBooking(payload);

    toast.success(res.message ?? "Created booking");
    setLoading(false);
    form.reset();
  };

  return (
    <div className="flex justify-center">
      <div className="my-10 w-full rounded-md border p-10 md:w-1/2 lg:w-2/4">
        <TourInfo data={data} />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="my-5 flex flex-col gap-3 xl:flex-row">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Check in</FormLabel>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      className="w-full rounded-md border shadow-sm"
                      captionLayout="dropdown"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Check out</FormLabel>
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={!checkIn}
                      fromDate={checkIn || undefined}
                      className={`w-full rounded-md border shadow-sm ${!checkIn ? "opacity-50" : ""}`}
                      captionLayout="dropdown"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Separator />
            <div className="py-2 font-bold">
              <span>
                Total: <span>$ {isDisplayPrice}</span>
              </span>
            </div>
            <Separator />

            <Button variant={"default"} type="submit" className="mt-5 w-full cursor-pointer">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Confirm"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TourCalendar;
