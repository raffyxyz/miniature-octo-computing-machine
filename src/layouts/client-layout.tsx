"use client";
import React from "react";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Components
import { Header } from "@/components/Common/Header";
import { NavbarSimple } from "@/components/Common/Navbar";

import { clientNav, navbarConfig, headerConfig } from "@/lib/nav-const";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
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
        <NavbarSimple data={clientNav} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
