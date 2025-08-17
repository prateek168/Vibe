import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Builder – SaaS AI Website Builder",
  description:
    "AI-powered SaaS website builder built with Next.js, Inngest, TypeScript, E2B, and Clerk. Deploy fast, scale easily, and let AI handle the heavy lifting.",
  keywords: [
    "Next.js",
    "Inngest",
    "Clerk",
    "TypeScript",
    "AI SaaS",
    "Website Builder",
    "E2B",
    "SaaS Boilerplate",
  ],
  authors: [{ name: "Vibe Builder Team" }],
  creator: "Vibe Builder",
  openGraph: {
    title: "Vibe Builder – SaaS AI Website Builder",
    description:
      "Build and launch AI-powered SaaS websites with Next.js, Inngest, TypeScript, E2B, and Clerk.",
    url: "https://vibe-builder.vercel.app",
    siteName: "Vibe Builder",
    images: [
      {
        url: "https://vibe-builder.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vibe Builder Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Builder – SaaS AI Website Builder",
    description:
      "Build and deploy SaaS websites with AI, Next.js, Inngest, TypeScript, E2B, and Clerk.",
    images: ["https://vibe-builder.vercel.app/og-image.png"],
    creator: "@your_twitter_handle",
  },
  metadataBase: new URL("https://vibe-builder.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <ClerkProvider
    appearance={{
      variables:{
        colorPrimary: "#C96342"
      }
    }}
  >
  <TRPCReactProvider>
      
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
          >

        <Toaster/>
        {children}
          </ThemeProvider>
      </body>
    </html>
  </TRPCReactProvider>
  </ClerkProvider>
  );
}
