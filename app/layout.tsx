import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrainlyAI — Discover. Train. Earn. | Global AI Career Opportunities",
  description:
    "Global AI Training & Career Opportunities. A platform to discover legitimate AI trainer, AI evaluator, data annotation, and subject-matter expert opportunities worldwide.",
  keywords: [
    "AI trainer jobs",
    "AI evaluator",
    "LLM training",
    "data annotation",
    "remote AI jobs",
    "TrainlyAI",
    "global freelance AI jobs",
  ],
  authors: [{ name: "TrainlyAI Team" }],
  openGraph: {
    title: "TrainlyAI — Discover. Train. Earn.",
    description:
      "Global platform for AI trainer, evaluator, data annotation, and domain expert opportunities worldwide.",
    url: "https://trainlyai.com",
    siteName: "TrainlyAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}

