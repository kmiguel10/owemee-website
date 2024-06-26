"use client";

import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack } from "@chakra-ui/react";
import { FcAssistant, FcCalculator, FcCheckmark } from "react-icons/fc";
import Image from "next/image"; // Import the Next.js Image component

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  imageSrc: string; // Add imageSrc as a prop
}

const Feature = ({ title, text, icon, imageSrc }: FeatureProps) => {
  return (
    <Stack gap={4}>
      <Image
        objectFit="cover"
        alt={title}
        src={imageSrc}
        sizes="100vw"
        width={300}
        height={300}
      />
      <Text fontWeight={600} color={"green.400"}>
        {title}
      </Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={20}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCalculator} w={10} h={10} />}
          title={"Effortless Expense Tracking"}
          text={
            "Add expenses on the go and let Owemee keep track of who owes what. No more mental math or awkward money talks."
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
        <Feature
          icon={<Icon as={FcCheckmark} w={10} h={10} />}
          title={"Settle Up Easily"}
          text={
            "When the trip ends, settling up is a breeze. Owemee calculates the simplest way to pay back and helps you settle debts seamlessly."
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Transparency and Trust"}
          text={
            "Keep everyone in the loop with transparent expense logs. Everyone can see who paid for what, eliminating confusion and building trust."
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
      </SimpleGrid>
    </Box>
  );
}
