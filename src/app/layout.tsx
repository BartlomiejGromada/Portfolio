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

import { PortfolioProvider } from "@/context/PortfolioContext";
import { getPortfolioData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Bartłomiej | Fullstack Developer",
  description:
    "Portfolio Fullstack Developera specjalizującego się w .NET i React.",
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portfolioData = await getPortfolioData();

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
          <PortfolioProvider data={portfolioData}>
            <Navbar />
            <main className="flex-1 flex flex-col">{children}</main>
            <Footer />
          </PortfolioProvider>
        </Providers>
      </body>
    </html>
  );
}
