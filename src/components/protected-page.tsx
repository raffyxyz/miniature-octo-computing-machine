import React, { ReactNode } from "react";
import { validateRequest } from "@/utils/auth";
import { redirect } from "next/navigation";

interface Props {
  children: ReactNode;
  allowedUserTypes: Array<string | undefined>;
}

export default async function ProtectedPage({
  children,
  allowedUserTypes,
}: Props) {
  const { user } = await validateRequest();

  if (allowedUserTypes.includes(user?.type)) {
    return <React.Fragment>{children}</React.Fragment>;
  }

  return redirect("/not-allowed");
}
