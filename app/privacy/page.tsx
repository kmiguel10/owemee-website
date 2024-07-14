/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Center,
  Container,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function Page() {
  return (
    <Container paddingY={10} maxW="container.lg">
      <Stack spacing={6}>
        {/* This will add space between all direct children */}
        <Center paddingBlock={10}>
          <Heading justifyContent="center" size={"lg"}>
            Privacy Policy for Owemee
          </Heading>
        </Center>
        <Heading size="sm">Last updated: July 17, 2024</Heading>
        <Text>Thank you for downloading and using Owemee.</Text>
        <Text>
          This page informs you of our policies regarding the collection, use,
          and disclosure of personal data when you use our Service and the
          choices you have associated with that data.
        </Text>
        <Heading size={"md"}>Information Collection and Use</Heading>
        <Text>
          We collect only one piece of personal information for the functioning
          of our Service:
        </Text>
        <UnorderedList>
          <ListItem>
            <strong>Email Address:</strong> We collect your email address solely
            for the purpose of sending you a magic link to log in to the app. We
            do not use your email for any other purpose, nor do we share it with
            any third parties.
          </ListItem>
        </UnorderedList>
        <Heading size={"md"}>Use of Data</Heading>
        <Text>We use the collected data for the following purpose:</Text>
        <UnorderedList>
          <ListItem>
            To provide and maintain our Service, specifically to allow you to
            log in using a secure magic link sent to your email.
          </ListItem>
        </UnorderedList>
        <Heading size={"md"}>Data Retention</Heading>
        <Text>
          We retain your email address only for as long as necessary to provide
          you with the login service. If you choose to delete your account, your
          email will be removed from our system.
        </Text>
        <Heading size={"md"}>Security</Heading>
        <Text>
          We value your trust in providing us your email address, thus we strive
          to use commercially acceptable means of protecting it. However,
          remember that no method of transmission over the internet, or method
          of electronic storage is 100% secure and reliable, and we cannot
          guarantee its absolute security.
        </Text>
        <Heading size={"md"}>Changes to This Privacy Policy</Heading>
        <Text>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the "Last updated" date at the top of this Privacy Policy.
        </Text>
        <Heading size={"md"}>Contact Us</Heading>
        <Text>
          If you have any questions about this Privacy Policy, please contact
          us:
        </Text>
        <UnorderedList>
          <ListItem>By email: oweemeeapp@gmail.com</ListItem>
          <ListItem>
            By visiting this page on our website: https://owemee.app
          </ListItem>
        </UnorderedList>
      </Stack>
    </Container>
  );
}

export default Page;
