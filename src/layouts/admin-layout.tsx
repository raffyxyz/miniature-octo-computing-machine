"use client";
import React from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Components
import { Header } from "@/components/Common/Header";
import { NavbarSimple } from "@/components/Common/Navbar";

import { adminNav, navbarConfig, headerConfig } from "@/lib/nav-const";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ ...navbarConfig, collapsed: { mobile: !opened } }}
      header={headerConfig}
      padding="md"
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <NavbarSimple data={adminNav} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
