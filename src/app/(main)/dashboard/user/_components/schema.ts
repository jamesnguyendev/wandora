import z from "zod";

export const recentLeadSchema = z.object({
  id: z.string(),
  email: z.string(),
  role: z.enum(["guest", "admin"]),
  verified: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
