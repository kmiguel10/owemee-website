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
import Image from "next/image";
import { ReactElement } from "react";
import { FcAssistant, FcCalculator, FcCheckmark } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
  imageSrc: string;
  videoSrc: string;
  isVideo: boolean;
}

const Feature = ({
  title,
  text,
  icon,
  imageSrc,
  videoSrc,
  isVideo,
}: FeatureProps) => {
  return (
    <Stack
      as="article"
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
            as="h3"
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
          {isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label={`Video demonstrating ${title}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              objectFit="cover"
              alt={`Image illustrating ${title}`}
              src={imageSrc}
              sizes="(max-width: 768px) 100vw, 300px"
              width={300}
              height={300}
              priority
            />
          )}
        </Box>
      </Center>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box as="section" p={20} aria-labelledby="features-heading">
      <Center>
        <Heading as="h2" id="features-heading" size="2xl" paddingBottom={20}>
          Features
        </Heading>
      </Center>

      <SimpleGrid
        as="ul"
        columns={{ base: 1, md: 1 }}
        spacing={10}
        justifyContent={"center"}
        listStyleType="none"
      >
        <li>
          <Feature
            icon={<Icon as={FcCheckmark} w={10} h={10} />}
            title="Monitor Expenses Easily"
            text="Throughout the duration of your trip, have a clear picture of who owes who and how much"
            imageSrc="/features/tabs.mp4"
            videoSrc="/features/resized-view-settlement.mp4"
            isVideo={true}
          />
        </li>
        <li>
          <Feature
            icon={<Icon as={FcCalculator} w={10} h={10} />}
            title="Effortless Expense Tracking"
            text="Easily add transactions on the go and let Owemee keep track of who owes what."
            imageSrc="/features/feature1.png"
            videoSrc="/features/resized-create-transaction.mp4"
            isVideo={true}
          />
        </li>
        <li>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title="Split Transaction Amount"
            text="Sometimes, you might want to split the amount evenly or customize the split among the group."
            imageSrc="/features/feature1.png"
            videoSrc="/features/resized-edit-transaction.mp4"
            isVideo={true}
          />
        </li>
      </SimpleGrid>
    </Box>
  );
}
