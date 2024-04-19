"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { login } from "@/actions/auth-actions";
import {
  TextInput,
  PasswordInput,
  Text,
  Stack,
  Button,
  rem,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconLock, IconAt } from "@tabler/icons-react";
import { hasValidationError } from "@/utils/validationHelper";

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, {
    state: "",
    error: "",
  });

  useEffect(() => {
    if (state.state === "account_error" || state.state === "no_account") {
      notifications.show({
        color: "yellow",
        title: "Account Error",
        message: state.error,
      });
    }
  }, [state]);

  return (
    <form action={formAction}>
      <Stack mb={rem(20)} gap="lg">
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
        <SubmitButton />
        <Text fz={rem(14)} ta="center">
          Don&apos;t have an account?{" "}
          <Text href="/register" component={Link} fz={rem(14)}>
            Register
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
      Login
    </Button>
  );
}
