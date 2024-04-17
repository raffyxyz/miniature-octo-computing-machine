"use server";
import User from "@/models/user";
import connectMongo from "@/utils/mongoose";
import { redirect } from "next/navigation";
import { Argon2id } from "oslo/password";
import { lucia, validateRequest } from "@/utils/auth";
import { cookies } from "next/headers";

interface ActionResult {
  error: string;
}

export async function register(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const password = formData.get("password");

  if (typeof password !== "string") {
    return { error: "Invalid password" };
  }
  const hashedPassword = await new Argon2id().hash(password);

  try {
    await connectMongo();

    const user = await User.create({
      name: formData.get("name"),
      username: formData.get("username"),
      email: formData.get("email"),
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
      error: "There is problem",
    };
  }

  return redirect("/dashboard");
}

export async function login(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const username = formData.get("username");
  const password = formData.get("password");

  // you can use zod or any other library to validate the formData

  if (typeof username !== "string") {
    return { error: "Not valid" };
  }

  await connectMongo();
  const existingUser = await User.findOne({ username: username });

  if (typeof password !== "string") {
    return { error: "No password" };
  }

  const validPassword = await new Argon2id().verify(
    existingUser.hashed_password,
    password
  );
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser._id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  );
  return redirect("/dashboard");
}

export async function logout(): Promise<ActionResult> {
  const { session } = await validateRequest();
  if (!session) {
    return {
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
