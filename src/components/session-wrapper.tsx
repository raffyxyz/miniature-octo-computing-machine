import React, { ReactNode } from "react";
import { validateRequest } from "@/utils/auth";
import { redirect } from "next/navigation";
import { ClientLayout } from "@/layouts/client-layout";
import { ProviderLayout } from "@/layouts/provider-layout";
import { AdminLayout } from "@/layouts/admin-layout";

const types = {
  admin: AdminLayout,
  provider: ProviderLayout,
  client: ClientLayout,
};

type SessionWrapperProps = {
  children: ReactNode;
  allowedUser: Array<string | undefined>;
};

export default async function SessionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { user } = await validateRequest();

  if (!user) {
    redirect("/login");
  }

  if (user.type === "provider") {
    return <ProviderLayout>{children}</ProviderLayout>;
  }

  if (user.type === "client") {
    return <ClientLayout>{children}</ClientLayout>;
  }

  return <AdminLayout>{children}</AdminLayout>;
}
