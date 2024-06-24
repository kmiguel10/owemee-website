import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
    </>
  );
}
