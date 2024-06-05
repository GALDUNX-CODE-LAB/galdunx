import { z } from "zod";

export const contactValidation = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  senderName: z.string().min(1, {
    message: "Name is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});
