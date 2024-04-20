import React from "react";
import SessionWrapper from "@/components/session-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SessionWrapper>{children}</SessionWrapper>;
}
