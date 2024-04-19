"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { register } from "@/actions/auth-actions";
import {
  TextInput,
  PasswordInput,
  Text,
  Stack,
  Button,
  rem,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconLock, IconMail, IconUser, IconAt } from "@tabler/icons-react";
import { hasValidationError } from "@/utils/validationHelper";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, { state: "", error: "" });

  useEffect(() => {
    if (state.state === "register_error") {
      notifications.show({
        color: "yellow",
        title: "Account Registration Error",
        message: state.error,
      });
    }
  }, [state]);

  return (
    <form action={formAction}>
      <Stack mb={rem(20)} gap="lg">
        <TextInput
          leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Name"
          name="name"
          error={
            state.state === "validation_error" &&
            hasValidationError(state?.error, "name")?.message
          }
        />
        <TextInput
          leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Email"
          name="email"
          error={
            state.state === "validation_error" &&
            hasValidationError(state?.error, "email")?.message
          }
        />
        <TextInput
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Username"
          name="username"
          error={
            state.state === "validation_error" &&
            hasValidationError(state?.error, "username")?.message
          }
        />
        <PasswordInput
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Password"
          name="password"
          error={
            state.state === "validation_error" &&
            hasValidationError(state?.error, "password")?.message
          }
        />
        <PasswordInput
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Confirm Password"
          name="confirm_password"
          error={
            state.state === "validation_error" &&
            hasValidationError(state?.error, "confirm_password")?.message
          }
        />
        <SubmitButton />
        <Text fz={rem(14)} ta="center">
          Already have an account?{" "}
          <Text href="/login" component={Link} fz={rem(14)}>
            Login
          </Text>
        </Text>
      </Stack>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" loading={pending}>
      Register
    </Button>
  );
}
