"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/theme-provider";
import { Navigation } from "../components/navigation";
import { Toaster } from "../components/ui/toaster";
import { ZoomProvider } from "../contexts/ZoomContext";
import { useState, useEffect } from "react";
import LoadingPage from "@/components/loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Converges&apos;25-RCPIT Tech Fest</title>
        <meta
          name="description"
          content="Experience the future of technology at Converges"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {isLoading ? (
            <LoadingPage loading />
          ) : (
            <ZoomProvider>
              <Navigation />
              {children}
              <Toaster />
            </ZoomProvider>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
