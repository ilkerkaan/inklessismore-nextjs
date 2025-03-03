import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sonner } from "@/components/ui/sonner";
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
  title: "Inkless Is More | Nairobi&apos;s Premier Laser Tattoo Removal Studio",
  description: "Welcome to Nairobi&apos;s Premier Laser Tattoo Removal Studio! We specialize in laser treatment for tattoo removal, using advanced PicosureⓇ technology to ensure the best results for our clients.",
  keywords: ["tattoo removal", "laser tattoo removal", "Nairobi", "Kenya", "PicosureⓇ", "skin treatment"],
  icons: {
    icon: "/favicon.ico",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
