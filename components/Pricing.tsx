"use client";

import {
  Box,
  Center,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const freePlan = [
  { id: 1, desc: "Duration: 1 Week (Not Extendable)" },
  { id: 2, desc: "Users: 2" },
  { id: 3, desc: "Active Transactions: 20" },
];

const oneWeek = [
  { id: 1, desc: "Duration: 1 Week (Extendable)" },
  { id: 2, desc: "Users: 2 - 12" },
  { id: 3, desc: "Active Transactions: 100" },
];

const twoWeeks = [
  { id: 1, desc: "Duration: 2 Weeks (Extendable)" },
  { id: 2, desc: "Users: 2 - 12" },
  { id: 3, desc: "Active Transactions: 200" },
];

interface PackageTierProps {
  title: string;
  options: Array<{ id: number; desc: string }>;
  typePlan: string;
  checked?: boolean;
}

const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "green.600";
  const bgColorLight = checked ? "green.400" : "gray.100";

  const colorTextDark = checked ? "white" : "green.500";
  const bgColorDark = checked ? "green.400" : "gray.100";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "column",
        md: "row",
      }}
      alignItems={{ md: "center" }}
      bg={useColorModeValue(bgColorLight, bgColorDark)}
    >
      <Heading
        size={"md"}
        color={useColorModeValue(colorTextLight, colorTextDark)}
      >
        {title}
      </Heading>
      <List spacing={3} textAlign="start" color={checked ? "white" : undefined}>
        {options.map((desc) => (
          <ListItem key={desc.id}>
            <ListIcon
              as={FaCheckCircle}
              color={checked ? "white" : "green.500"}
            />
            {desc.desc}
          </ListItem>
        ))}
      </List>
      <Heading
        size={"xl"}
        color={useColorModeValue(colorTextLight, colorTextDark)}
      >
        {typePlan}
      </Heading>
    </Stack>
  );
};

const ThreeTierPricingHorizontal = () => {
  return (
    <Box py={6} px={5} width="full">
      <Center paddingBottom={20}>
        <Heading as="h2" size="2xl">
          Pricing
        </Heading>
      </Center>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          paddingBottom={20}
          paddingTop={20}
          alignItems={"center"}
          justifyContent={{
            base: "flex-start",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Stack
            width={{
              base: "100%",
              md: "40%",
            }}
            textAlign={"center"}
          >
            <Heading size={"lg"}>
              Owemee offers <Text color="green.400">3 pay-per-use plans</Text>
            </Heading>
          </Stack>
          <Stack
            width={{
              base: "100%",
              md: "60%",
            }}
          >
            <Text textAlign={"center"}>
              Owemee is a pay-per-use app, meaning you only pay when you use it.
              No subscriptions, no recurring fees. Choose a plan that suits the
              duration you need.
            </Text>
          </Stack>
        </Stack>

        <Divider />
        <PackageTier title={"Free Plan"} typePlan=" Free " options={freePlan} />
        <Divider />
        <PackageTier
          title={"1 Week Plan"}
          checked={true}
          typePlan="$1.99"
          options={oneWeek}
        />
        <Divider />
        <PackageTier
          title={"2 Weeks Plan"}
          typePlan="$2.99"
          options={twoWeeks}
        />
      </Stack>
    </Box>
  );
};

export default ThreeTierPricingHorizontal;
