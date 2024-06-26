"use client";

import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Heading,
  Center,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";
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
    <Stack
      gap={20}
      justifyContent={"space-around"}
      direction={{ base: "column", md: "row" }}
      paddingBottom={10}
    >
      <Box
        width={{ md: "40%", base: "100%" }}
        justifyContent={"flex-start"}
        alignContent={"center"}
      >
        <Stack gap="6">
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
          >
            <Text fontWeight={600} color={"green.400"}>
              {title}
            </Text>
          </Heading>

          <Text color={"gray.600"}>{text}</Text>
        </Stack>
      </Box>
      <Center>
        <Box
          position={"relative"}
          rounded={"2xl"}
          boxShadow={"2xl"}
          overflow={"hidden"}
          width={300}
        >
          <Image
            objectFit="cover"
            alt={title}
            src={imageSrc}
            sizes="100vw"
            width={300}
            height={300}
          />
        </Box>
      </Center>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={20}>
      <Center>
        <Heading as={"h2"} size="2xl" paddingBottom={20}>
          Features
        </Heading>
      </Center>

      <SimpleGrid
        row={{ base: 1, md: 3 }}
        spacing={10}
        justifyContent={"center"}
      >
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
