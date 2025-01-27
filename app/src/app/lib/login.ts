'use server'

import { z } from "zod"

export const loginSchema = z.object({
    userName: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }).optional(),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    })
    .trim()
})

export type FormState =
  | {
      errors?: {
        userName?: string[]
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined