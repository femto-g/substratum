import { z } from "zod";

export const userSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  password: z.string({
    required_error: "Password is required",
  }),
});

export const userSignUpSchema = z
  .object({
    username: z
      .string({
        required_error: "Username is required",
      })
      .min(8, { message: "Username must be at least 8 characters" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const userLoginSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(1),
  password: z.string({ required_error: "Password is required" }).min(1),
});

export type UserSchema = z.infer<typeof userSchema>;

export const numberSchema = z.number();

export const stringSchema = z.string();
