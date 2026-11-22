import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description:
    "Personal portfolio showcasing projects, skills, experiences, and learning journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}