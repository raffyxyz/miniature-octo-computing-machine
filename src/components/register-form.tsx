"use client";
import { useFormState } from "react-dom";
import { register } from "@/actions/auth-actions";
import {
  TextInput,
  PasswordInput,
  Text,
  Stack,
  Button,
  rem,
} from "@mantine/core";
import { IconLock, IconMail, IconUser, IconAt } from "@tabler/icons-react";
import Link from "next/link";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, { error: "" });

  return (
    <form action={formAction}>
      <Stack mb={rem(20)} gap="lg">
        <TextInput
          leftSection={<IconUser style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Name"
          name="name"
        />
        <TextInput
          leftSection={<IconMail style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Email"
          name="email"
        />
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
        <PasswordInput
          leftSection={<IconLock style={{ width: rem(16), height: rem(16) }} />}
          placeholder="Confirm Password"
          name="confirm_password"
        />
        <Button type="submit">Login</Button>
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
