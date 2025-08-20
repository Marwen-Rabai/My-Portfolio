import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "./provider";
import RemoveNextDevElements from '@/components/RemoveNextDevElements'
import CustomCursor from '@/components/ui/CustomCursor'
import MobileScrollEnhancer from '@/components/ui/MobileScrollEnhancer'

export const metadata: Metadata = {
  title: "Marwen Rabai - Digital Architect & Event Designer",
  description: "Crafting premium digital experiences and unforgettable events with 14+ years of expertise spanning the globe",
};

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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RemoveNextDevElements />
          <CustomCursor />
          <MobileScrollEnhancer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
