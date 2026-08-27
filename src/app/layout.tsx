import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/navbar/Navbar";
import { colorSchemeInitScript } from "@/theme/color-scheme";
import { ThemeProvider } from "@/theme/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kiosos",
    template: "%s · Kiosos",
  },
  description:
    "Software-powered kiosks, on-site installations, and a mobile app for cafe and restaurant owners.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="kiosos"
      data-color-scheme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink">
        <Script id="kiosos-color-scheme" strategy="beforeInteractive">
          {colorSchemeInitScript}
        </Script>
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
