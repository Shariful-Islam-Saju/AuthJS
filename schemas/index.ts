import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email must be valid",
  }),
  password: z.string().min(1, {
    message: "Password Required",
  }),
});
export const registerSchema = z.object({
  email: z.string().email({
    message: "Email must be valid",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 latters required!",
  }),
  name: z.string().min(1, {
    message: "Name Required",
  }),
});
