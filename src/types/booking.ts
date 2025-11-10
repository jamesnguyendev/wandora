import { Tour } from "./tour";

export interface booking {
  id: string;
  userId: string;
  listingId: string;
  startDate: string | Date;
  endDate: string | Date;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  listing?: Tour;
}

export interface ResponseBooking {
  status: string;
  code: number;
  message: string;
  data: booking[];
  timestamp: string;
}
