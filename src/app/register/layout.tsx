import { ReactNode } from "react";
import AuthLayout from "@/layouts/auth-layout";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <AuthLayout>{children}</AuthLayout>;
}
