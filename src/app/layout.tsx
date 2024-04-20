import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={workSans.className}>
        <MantineProvider defaultColorScheme="light">
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
