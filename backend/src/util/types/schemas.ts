import { z } from "zod";

export const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type UserSchema = z.infer<typeof userSchema>;

export const numberSchema = z.number();

export const stringSchema = z.string();
