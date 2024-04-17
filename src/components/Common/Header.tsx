import React from "react";
import { Burger, Group, Text, ActionIcon } from "@mantine/core";
import { IconBell } from "@tabler/icons-react";
import { UserMenu } from "../UserMenu";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = ({ opened, toggle }) => {
  return (
    <Group justify="space-between" w="100%" h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Text>LOGO</Text>
      <Group>
        <ActionIcon variant="transparent" color="gray">
          <IconBell />
        </ActionIcon>
        <UserMenu />
      </Group>
    </Group>
  );
};
