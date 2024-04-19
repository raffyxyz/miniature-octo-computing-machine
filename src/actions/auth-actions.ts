"use server";
import User from "@/models/user";
import connectMongo from "@/utils/mongoose";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { lucia, validateRequest } from "@/utils/auth";
import { cookies } from "next/headers";
import { loginSchema, registerSchema } from "@/lib/zod-validation";
import { Error } from "@/types";

export interface ActionResult {
  state: string;
  error: Error[] | any;
}

export async function register(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const validation = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });
  if (validation.success) {
    const hashedPassword = await new Argon2id().hash(validation.data.password);
    try {
      await connectMongo();
      const existingUser = await User.findOne({
        username: validation.data.username,
      });
      if (existingUser) {
        return {
          state: "register_error",
          error: "Username is not available.",
        };
      }
      const user = await User.create({
        name: validation.data.name,
        username: validation.data.username,
        email: validation.data.email,
        hashed_password: hashedPassword,
        type: "client",
      });
      const session = await lucia.createSession(user._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    } catch (error) {
      console.log(error);
      return {
        state: "register_error",
        error: "There is a problem creating your account.",
      };
    }
    return redirect("/dashboard");
  } else {
    const issues = validation.error.issues;
    return {
      state: "validation_error",
      error: issues,
    };
  }
}

// LOGIN ACTION
export async function login(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const validation = loginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  if (validation.success) {
    await connectMongo();
    const existingUser = await User.findOne({
      username: validation.data.username,
    });

    if (existingUser) {
      // Validate password.
      const validPassword = await new Argon2id().verify(
        existingUser.hashed_password,
        validation.data.password
      );

      // Show show error.
      if (!validPassword) {
        return {
          state: "account_error",
          error: "Incorrect username or password",
        };
      }

      // Create session.
      const session = await lucia.createSession(existingUser._id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
      return redirect("/dashboard");
    } else {
      return {
        state: "no_account",
        error: "No credentials found.",
      };
    }
  } else {
    const issues = validation.error.issues;
    return {
      state: "validation_error",
      error: issues,
    };
  }
}

// LOGOUT ACTION
export async function logout(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
      state: "error",
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );

  return redirect("/login");
}
