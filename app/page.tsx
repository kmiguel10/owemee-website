// app/page.tsx
import { Metadata } from "next";
import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Box } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Split Expenses with Ease on Group Trips", // This will be inserted into the template
  description:
    "Simplify expense splitting with Owemee. No more awkward money talks on group trips. Track and split costs easily for stress-free travel.",
  openGraph: {
    title: "Owemee - Hassle-Free Expense Splitting for Group Trips",
    description:
      "Simplify group expenses with Owemee. Track and split costs easily on your next adventure.",
    images: [
      {
        url: "https://www.owemee.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Owemee App Preview",
      },
    ],
  },
  twitter: {
    title: "Owemee - Simplify Group Trip Expenses",
    description:
      "Split expenses effortlessly on group trips with Owemee. Download now for stress-free travel.",
    images: ["https://www.owemee.app/twitter-image.jpg"],
  },
};

export default function Home() {
  return (
    <Box as="main">
      <HeroSection />
      <Features />
      <Pricing />
    </Box>
  );
}
