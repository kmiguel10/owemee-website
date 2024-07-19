import { Container, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <Container
      py={8}
      maxW={"6xl"}
      as={Stack}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading size={"2xl"}>Page is under construction...</Heading>
      <Image
        src={"/under-construction.png"}
        alt={"Under Construction"}
        height={1200}
        width={1200}
      />
    </Container>
  );
}
