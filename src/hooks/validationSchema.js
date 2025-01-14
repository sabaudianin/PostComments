import { z } from "zod";

export const commentsSchema = z.object({
  author: z.string().min(2, "Minium 2 symbols").max(24, "Maximum 24 symbols"),
  description: z
    .string()
    .min(2, "Minium 2 letters")
    .max(440, "Maximum 440 letters"),
});

export const postSchema = z.object({
  author: z.string().min(2, "At least 2 symbols").max(24, "Maximum 24 symbols"),
  title: z.string().min(2, "Minium 4 symbols").max(48, "Maximum 48 symbols"),
  content: z
    .string()
    .min(16, " Post without content, Minium 16 letters")
    .max(2280, "Maximum 1280 letters"),
});
export const updatePostSchema = z.object({
  content: z
    .string()
    .min(16, " Post without content, Minium 16 letters")
    .max(2280, "Maximum 1280 letters"),
});
