"use client";

import {
  Box,
  Center,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image"; // Import the Next.js Image component
import { ReactElement } from "react";
import { FcAssistant, FcCalculator, FcCheckmark } from "react-icons/fc";

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
          icon={<Icon as={FcCheckmark} w={10} h={10} />}
          title={"Monitor Expenses Easily"}
          text={
            "Throughout the duration of your trip, have a clear picture of who owes who and how much"
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
        <Feature
          icon={<Icon as={FcCalculator} w={10} h={10} />}
          title={"Effortless Expense Tracking"}
          text={
            "Easily add transactions on the go and let Owemee keep track of who owes what."
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Split Transaction Amount"}
          text={
            "Sometimes, you might want to split the amount evenly or customize the split among the group."
          }
          imageSrc="/features/feature1.png" // Ensure this path is correct
        />
      </SimpleGrid>
    </Box>
  );
}
