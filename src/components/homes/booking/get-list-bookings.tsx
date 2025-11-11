import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ResponseBooking, booking } from "@/types/booking";

import TourInfo from "../detail/tour-info";

const ListBookings = ({ data }: { data: ResponseBooking }) => {
  return (
    <div className="my-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
      {data.data.map((item: booking) => (
        <div key={item.id} className="rounded-lg border p-3">
          <h4>Check in: {new Date(item.startDate).toLocaleTimeString()}</h4>
          <h4>Check out: {new Date(item.endDate).toLocaleTimeString()}</h4>
          <span>Total price: $ {item.totalPrice}</span>
          {item.listing ? (
            <Accordion type="single" collapsible className="w-full" defaultValue={item.id}>
              <AccordionItem value={item.id}>
                <AccordionTrigger>Tour Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <TourInfo data={item.listing} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ListBookings;
