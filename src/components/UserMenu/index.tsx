"use client";
import React from "react";
import { UnstyledButton, Avatar, Menu, rem } from "@mantine/core";
import { IconLogout, IconSettings, IconUser } from "@tabler/icons-react";

import styles from "./index.module.css";
import { logout } from "@/actions/auth-actions";
import ThemeSwitch from "./theme-switch";

export const UserMenu = () => {
  return (
    <UnstyledButton className={styles.user}>
      <Menu trigger="hover" shadow="md" width={150} withArrow>
        <Menu.Target>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
          />
        </Menu.Target>
        <Menu.Dropdown>
          <ThemeSwitch />
          <Menu.Item
            leftSection={
              <IconUser style={{ width: rem(15), height: rem(15) }} />
            }
          >
            Account
          </Menu.Item>
          <Menu.Item
            leftSection={
              <IconSettings style={{ width: rem(15), height: rem(15) }} />
            }
          >
            Settings
          </Menu.Item>
          <form action={logout}>
            <Menu.Item
              leftSection={
                <IconLogout style={{ width: rem(15), height: rem(15) }} />
              }
              component="button"
              type="submit"
            >
              Logout
            </Menu.Item>
          </form>
        </Menu.Dropdown>
      </Menu>
    </UnstyledButton>
  );
};
