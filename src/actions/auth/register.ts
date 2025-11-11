import axios from "axios";

export async function register(email: string, password: string) {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } },
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // const err = error as AxiosError<{ message?: string }>;
      // const message = err.response?.data?.message || "Invalid email or password";
      throw new Error("Invalid email or password");
    }
    throw new Error("Something went wrong during Register");
  }
}
