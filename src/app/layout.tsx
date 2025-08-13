import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShadnAdmin - Beautiful Modern Admin Dashboard",
  description: "Powerful, beautiful, and intuitive admin dashboard built with Next.js and Tailwind CSS. Manage your business with style and efficiency.",
  keywords: ["admin dashboard", "next.js", "tailwind css", "modern ui", "business management", "mobile responsive"],
  authors: [{ name: "ShadnAdmin Team" }],
  creator: "ShadnAdmin",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover',
  },
  openGraph: {
    title: "ShadnAdmin - Beautiful Modern Admin Dashboard",
    description: "Powerful, beautiful, and intuitive admin dashboard built with Next.js and Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShadnAdmin - Beautiful Modern Admin Dashboard",
    description: "Powerful, beautiful, and intuitive admin dashboard built with Next.js and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
