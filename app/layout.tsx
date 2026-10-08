import type { Metadata } from "next";
import { gothamPro, golosText } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATELIER 01 — Automotive Styling",
  description:
    "Премиальные плёнки. Профессиональная оклейка. Индивидуальный стиль.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preload" as="image" fetchPriority="low" href="https://www.figma.com/api/mcp/asset/f553936c-27bc-4b61-b5f2-fe5eae72ac2f.png" />
      </head>
      <body className={`${gothamPro.variable} ${golosText.variable}`}>
        {children}
      </body>
    </html>
  );
}
