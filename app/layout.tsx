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
    default: "Marwen Rabai | The Portfolio of a Passionate Professional",
    template: "%s | Marwen Rabai",
  },
  description:
    "The Portfolio of a Passionate Professional. Discover the art of being seen with Marwen Rabai, a Digital Marketing & SEO Specialist and Event Organizer with 14+ years of experience. Explore premium projects, innovative strategies, and a showcase of digital excellence.",
  keywords: [
    "Marwen Rabai",
    "Digital Marketing",
    "SEO Specialist",
    "Event Organizer",
    "Portfolio",
    "Professional",
    "Premium",
    "Modern",
    "2025",
    "necibnexus.com",
    "Criti-Aura",
    "AI App",
    "Event Platform",
    "Branding",
    "User Experience",
    "The Art of Being Seen"
  ],
  authors: [{ name: "Marwen Rabai" }],
  creator: "Marwen Rabai",
  publisher: "Marwen Rabai",
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL("https://marwen-rabai.netlify.app"),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Marwen Rabai | The Portfolio of a Passionate Professional",
    description:
      "The Portfolio of a Passionate Professional. Discover the art of being seen with Marwen Rabai, a Digital Marketing & SEO Specialist and Event Organizer with 14+ years of experience. Explore premium projects, innovative strategies, and a showcase of digital excellence.",
    url: "https://marwen-rabai.netlify.app",
    siteName: "Marwen Rabai Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/MY_Picture.webp",
        width: 800,
        height: 800,
        alt: "Marwen Rabai - The Art of Being Seen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marwen Rabai | The Portfolio of a Passionate Professional",
    description:
      "The Portfolio of a Passionate Professional. Discover the art of being seen with Marwen Rabai, a Digital Marketing & SEO Specialist and Event Organizer with 14+ years of experience. Explore premium projects, innovative strategies, and a showcase of digital excellence.",
    creator: "@marwenrabai",
    images: [
      {
        url: "/MY_Picture.webp",
        alt: "Marwen Rabai - The Art of Being Seen",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/cyberpunk-favicon.svg", type: "image/svg+xml" },
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
