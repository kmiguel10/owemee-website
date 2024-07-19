// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Owemee - Split Expenses with Ease for Group Trips",
    template: "%s | Owemee",
  },
  description:
    "No More Awkward Money Talks on Group Trips. Simplify expense splitting with Owemee. Track shared expenses, manage group vacation budgets, and split costs effortlessly.",
  keywords: [
    "group travel expense tracker",
    "split vacation costs app",
    "shared trip expenses",
    "group vacation budget planner",
    "travel cost sharing app",
    "split bills for group trips",
    "winter group vacation expenses",
    "summer group travel budget",
    "snowboarding trip cost splitter",
    "group travel money management",
    "vacation expense sharing tool",
    "split costs for group getaways",
    "travel expense divider app",
    "group trip financial organizer",
    "shared holiday expenses calculator",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.owemee.app/",
    siteName: "Owemee",
    title: "Owemee - Simplify Group Travel Expenses",
    description:
      "Split costs and manage expenses for group trips with ease using Owemee. The ultimate travel expense tracker for stress-free vacations.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@owemee",
    title: "Owemee - Group Travel Expense Splitting Made Easy",
    description:
      "Effortlessly split and track expenses for group vacations and trips. Your go-to app for shared holiday expenses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "MobileApplication",
              "name": "Owemee",
              "description": "Group travel expense tracker and vacation cost splitting app. Split bills, track shared costs, and settle debts easily for stress-free group trips.",
              "applicationCategory": "Finance",
              "operatingSystem": "iOS",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "keywords": "group travel expense tracker, split vacation costs, shared trip expenses, group vacation budget planner, travel cost sharing"
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
