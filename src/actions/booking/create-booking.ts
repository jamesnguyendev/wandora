"use server";

import axios from "axios";

import { booking } from "@/types/booking";
import { getValidAccessToken } from "@/utils/auth/get-valid-access-token";

export const createBooking = async (payload: Partial<booking>) => {
  const accessToken = await getValidAccessToken();

  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, payload, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error createBooking:", error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message && "Failed to createBooking");
    }
    throw new Error("Failed to createBooking");
  }
};
