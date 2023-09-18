import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiGithub,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";
import data from "../data/data.js";

const Footer = () => {
  return (
    <Flex p="5" wrap="wrap" w="100%" bg="black" color="white">
      <Heading w="100%" textAlign="center" mb="5">
        Links
      </Heading>
      <Flex
        w="100%"
        p="5"
        wrap="wrap"
        gap="12"
        alignItems="center"
        justifyContent="space-evenly"
        maxW="400px"
        m="auto"
      >
        <Link
          isExternal
          boxSize={10}
          as={SiLinkedin}
          href={data.links.linkedin}
        />
        <Link boxSize={10} as={SiGithub} isExternal href={data.links.github} />

        <Link
          boxSize={10}
          as={SiGeeksforgeeks}
          isExternal
          href={data.links.gfg}
        />

        <Link
          boxSize={10}
          as={SiCodechef}
          isExternal
          href={data.links.codechef}
        />

        <Link
          boxSize={10}
          as={SiCodeforces}
          isExternal
          href={data.links.codeforces}
        />

        <Link
          isExternal
          style={{ fontSize: "36px", fontWeight: "bolder" }}
          href={data.links.mail}
        >
          &#x40;
        </Link>
        <Link
          boxSize={10}
          as={SiWhatsapp}
          isExternal
          href={data.links.whatsapp}
        />
      </Flex>
      <Text w="100%" textAlign="center" pt="5" borderTop="2px solid">
        ©2023 | Copyright. All Right Reserved
      </Text>
    </Flex>
  );
};

export default Footer;
