import * as z from 'zod'

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email must be valid"
  }),
  password: z.string().min(1, {
    message: "Password Required"
  })
})