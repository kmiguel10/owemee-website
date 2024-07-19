"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  IconProps,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        as="section"
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 16, md: 24 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            as="h1"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "5xl", sm: "6xl", lg: "8xl" }}
          >
            <Text as={"span"} color={"green.400"}>
              Owemee
            </Text>
          </Heading>
          <Heading
            as="h2"
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "blue.400",
                zIndex: -1,
              }}
            >
              No More Awkward Money Talks on
            </Text>
            <br />
            <Text as={"span"} color={"green.400"}>
              Group Trips!
            </Text>
          </Heading>
          <Text color={"gray.600"} fontSize={{ base: "lg", sm: "xl" }}>
            Tired of splitting expenses during group trips? Owemee is the
            ultimate expense-splitting app that takes the hassle out of shared
            costs. Say goodbye to mental math, scattered notes, and awkward
            conversations.
          </Text>
          <Text color={"gray.600"} fontSize={{ base: "md", sm: "lg" }}>
            Focus on making unforgettable memories while Owemee handles tracking
            and splitting expenses. Clear, easy, and hassle-free expense
            management.
          </Text>
          <Stack
            spacing={{ base: 4, sm: 20 }}
            direction={{ base: "column", sm: "row" }}
            justify={"center"}
            alignItems={"center"}
          >
            <Link
              href="https://apps.apple.com/us/app/owemee/id6503184430?itsct=apps_box_link&itscg=30200"
              passHref
            >
              <Image
                src={"/download-button.svg"}
                alt={"Download Owemee on the App Store"}
                width={190}
                height={190}
                priority
              />
            </Link>

            <Image
              src={"/qr-code.jpg"}
              alt={"QR Code to download Owemee on the App Store"}
              width={190}
              height={190}
              priority
            />
          </Stack>
        </Stack>

        <Flex
          flex={1}
          justify={{ base: "center", md: "flex-end" }}
          align={{ base: "center", md: "flex-end" }}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            overflow={"hidden"}
            width={300}
            height={"fit-content"}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              aria-label="Video showcasing Owemee app features"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            >
              <source src="/features/resized-tabs.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
          <Blob
            w={"100%"}
            h={"150%"}
            position={"absolute"}
            top={"-20%"}
            left={0}
            zIndex={-1}
            color={useColorModeValue("blue.50", "blue.400")}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
