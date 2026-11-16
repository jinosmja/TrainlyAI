import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#4F46E5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "TrainlyAI — Discover. Train. Earn. | Global AI Training & Career Opportunities",
  description:
    "Discover legitimate remote and global opportunities in AI model training, AI evaluation, data annotation, and domain expertise. 100% human-verified opportunities worldwide.",
  keywords: [
    "AI trainer jobs",
    "AI evaluator",
    "LLM training",
    "data annotation",
    "remote AI jobs",
    "TrainlyAI",
    "freelance AI jobs",
    "RLHF",
    "model evaluation",
  ],
  authors: [{ name: "TrainlyAI Global Team" }],
  openGraph: {
    title: "TrainlyAI — Discover. Train. Earn.",
    description:
      "Global platform for AI trainer, evaluator, data annotation, and domain expert opportunities worldwide.",
    url: "https://trainlyai.com",
    siteName: "TrainlyAI",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}
