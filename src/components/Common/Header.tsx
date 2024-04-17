import React from "react";
import { Burger, Group, Text, Code } from "@mantine/core";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <Group justify="space-between" w="100%" h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Text>LOGO</Text>
      <Code fw={700}>v3.1.2</Code>
    </Group>
  );
};
