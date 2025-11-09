"use server";

import axios from "axios";

export async function getSearchTours(page = 1, limit = 10, q: string) {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/listings/search`, {
      params: { q, page, limit },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch listings");
      throw new Error(error.response?.data?.message && "Failed to fetch listings");
    }
    throw new Error("Failed to fetch listings");
  }
}
