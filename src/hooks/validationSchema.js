import { z } from "zod";

export const commentsSchema = z.object({
  author: z.string().min(2, "Minium 2 symbols").max(24, "Maximum 24 symbols"),
  description: z
    .string()
    .min(2, "Minium 2 letters")
    .max(480, "Maximum 480 letters"),
});
