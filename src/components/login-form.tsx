"use client";
import { useFormState } from "react-dom";
import { login } from "@/actions/auth-actions";
import {
  TextInput,
  PasswordInput,
  Text,
  Stack,
  Button,
  rem,
} from "@mantine/core";
import { IconLock, IconAt } from "@tabler/icons-react";
import Link from "next/link";

export const LoginForm = () => {
  const [state, formAction] = useFormState(login, { error: "" });

  return (
    <form action={formAction}>
      <Stack mb={rem(20)} gap="lg">
        <TextInput
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Username"
          name="username"
        />
        <PasswordInput
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Password"
          name="password"
        />
        <Button type="submit">Login</Button>
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
