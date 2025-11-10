"use server";

import axios from "axios";

export async function getTour(id: string) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/listings/${id}`);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch getTour");
      throw new Error(error.response?.data?.message && "Failed to fetch getTour");
    }
    throw new Error("Failed to fetch getTour");
  }
}
