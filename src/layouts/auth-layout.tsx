import { ReactNode } from "react";
import { Center, Card, Text, rem } from "@mantine/core";
import { LOGIN_MESSAGE } from "@/const/app";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Center h="100vh" p={{ base: rem(10) }}>
      <Card shadow="sm" padding="lg" radius="md" w={rem(400)} withBorder>
        <Text mt={rem(10)} mb={rem(30)} fw={500}>
          {LOGIN_MESSAGE}
        </Text>
        {children}
      </Card>
    </Center>
  );
}
