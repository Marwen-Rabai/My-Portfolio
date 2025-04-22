import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

// Font configuration with better performance settings
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Enhanced metadata configuration
export const metadata: Metadata = {
  title: {
    default: "Cyberpunk Portfolio | Digital Art & Creative Technology",
    template: "%s | Cyberpunk Portfolio",
  },
  description:
    "Explore a cyberpunk-themed showcase of digital art, creative coding, and cutting-edge interactive projects",
  keywords: [
    "cyberpunk",
    "portfolio",
    "digital art",
    "creative coding",
    "interactive",
    "technology",
  ],
  authors: [{ name: "Bowei Zhang" }],
  creator: "Bowei Zhang",
  publisher: "Bowei Zhang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bowei.art"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Cyberpunk Portfolio | Digital Art & Creative Technology",
    description:
      "Explore a cyberpunk-themed showcase of digital art, creative coding, and cutting-edge interactive projects",
    url: "https://bowei.art",
    siteName: "Cyberpunk Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberpunk Portfolio | Digital Art & Creative Technology",
    description:
      "Explore a cyberpunk-themed showcase of digital art, creative coding, and cutting-edge interactive projects",
    creator: "@bowei",
  },
  icons: {
    icon: [
      { url: "/cyberpunk-favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/cyberpunk-favicon.svg",
    apple: "/cyberpunk-favicon.svg",
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
