"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

// import { AppStoreBadge } from "#/components/AppStoreBadge";
// import { PlayStoreBadge } from "#/components/PlayStoreBadge";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={8}
          // direction={{ base: "column", md: "column" }}
          // spacing={4}
          // justify={{ md: "space-between" }}
          // align={{ md: "center" }}
          spacing={{ base: 4, sm: 20 }}
          direction={{ base: "column", sm: "row" }}
          justify={"space-between"}
          alignItems={"center"}
        >
          <Stack
            spacing={{ base: 4, sm: 4 }}
            direction={{ base: "column", sm: "column" }}
            justify={"flex-start"}
          >
            <Stack direction={"row"} spacing={6}>
              <Text>
                <Link href="/privacy">Privacy Policy</Link>
              </Text>
              <Text>
                <Link href="mailto:owemeeapp@gmail.com">Contact Us</Link>
              </Text>
              <Text>
                <Link href="/whatsnew">What&apos;s New</Link>
              </Text>
            </Stack>
            <Stack>
              <Text>© 2024 Kent Miguel. All rights reserved</Text>
            </Stack>
          </Stack>
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
                alt={"Download Owemee Appstore Link"}
                width={130}
                height={130}
              />
            </Link>
            <Image
              src={"/qr-code.jpg"}
              alt={"Download Owemee Appstore Link"}
              width={100}
              height={100}
            />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
