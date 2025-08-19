import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Twelfth",
  description: "Futebol, apenas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.cdnfonts.com/css/neue-haas-grotesk-display-pro"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}