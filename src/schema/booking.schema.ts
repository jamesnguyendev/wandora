/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { z } from "zod";

export const bookingSchema = z
  .object({
    checkIn: z.date({ required_error: "Please select a check-in date" }),
    checkOut: z.date({ required_error: "Please select a check-out date" }).optional(),
  })
  .refine(
    (data) => {
      if (data.checkIn && data.checkOut) {
        return data.checkOut > data.checkIn;
      }
      return true;
    },
    {
      message: "Check-out must be after check-in",
      path: ["checkOut"],
    },
  );
