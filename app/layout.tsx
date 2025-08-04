import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Boink Talent Agency",
  description:
    "The premier OnlyFans marketing agency helping creators achieve financial freedom through strategic growth.",
  generator: "v0.dev",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.png" type="image/png" sizes="32x32" />
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="favicon.png" sizes="180x180" />
        <link rel="icon" href="favicon.png" type="image/png" sizes="16x16" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
