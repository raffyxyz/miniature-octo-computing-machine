import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Name cannot be empty"),
  password: z.string().min(1, "Password cannot be empty"),
});

export const registerSchema = z
  .object({
    name: z.string().min(5, "Name minimum 5 letters."),
    email: z.string().min(1, "Email is required.").email("Not a valid email."),
    username: z.string().min(4, "Username minimum 4 letters."),
    password: z.string().min(6, "Password minimum 6 characters."),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"], // set the path of the error
  });
