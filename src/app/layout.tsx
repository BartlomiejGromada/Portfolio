import type { Metadata } from "next";
import { Geist, Space_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/custom/Navbar";
import { Footer } from "@/components/custom/Footer";
import { Providers } from "@/app/providers";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bartłomiej | Fullstack Developer",
  description:
    "Portfolio Fullstack Developera specjalizującego się w .NET i React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground flex flex-col font-sans antialiased",
          geistSans.variable,
          spaceMono.variable,
        )}
      >
        <Providers>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
