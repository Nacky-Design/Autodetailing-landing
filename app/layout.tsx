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
      <body className={`${gothamPro.variable} ${golosText.variable}`}>
        {children}
      </body>
    </html>
  );
}
