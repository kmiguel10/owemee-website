import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <Features />
      <Pricing />
    </Box>
  );
}
