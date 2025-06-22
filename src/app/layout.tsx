import { TempoInit } from "@/components/tempo-init";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "LetWrk - Your Entire Workflow in One Place",
    template: "%s | LetWrk"
  },
  description: "LetWrk brings all your tools together in a customizable dashboard. No more tab switching, just seamless productivity. Integrate Slack, Calendar, Analytics, and more.",
  keywords: "workflow management, productivity tools, unified workspace, dashboard, team collaboration, integrations",
  authors: [{ name: "LetWrk Team", url: "https://letwrk.io" }],
  creator: "LetWrk",
  publisher: "LetWrk",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://letwrk.io",
    siteName: "LetWrk",
    title: "LetWrk - Your Entire Workflow in One Place",
    description: "LetWrk brings all your tools together in a customizable dashboard. No more tab switching, just seamless productivity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LetWrk - Your Entire Workflow in One Place",
    description: "LetWrk brings all your tools together in a customizable dashboard.",
    creator: "@letwrk",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        {children}
        <TempoInit />
      </body>
    </html>
  );
}
