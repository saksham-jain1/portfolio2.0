import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
  SiCodechef,
  SiCodeforces,
  SiCodingninjas,
  SiGeeksforgeeks,
  SiGithub,
  SiLeetcode,
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
        <Link aria-label="footer links" isExternal href={data.links.linkedin}>
          <SiLinkedin size={36} />
        </Link>
        <Link aria-label="footer links" isExternal href={data.links.github}>
          <SiGithub size={36} />
        </Link>

        <Link aria-label="footer links" isExternal href={data.links.gfg}>
          <SiGeeksforgeeks size={36} />
        </Link>

        <Link aria-label="footer links" isExternal href={data.links.codechef}>
          <SiCodechef size={36} />
        </Link>

        <Link aria-label="footer links" isExternal href={data.links.codeforces}>
          <SiCodeforces size={36} />
        </Link>
        <Link aria-label="footer links" isExternal href={data.links.leetcode}>
          <SiLeetcode size={36} />
        </Link>
        <Link
          aria-label="footer links"
          isExternal
          href={data.links.codingninjas}
        >
          <SiCodingninjas size={36} />
        </Link>

        <Link
          aria-label="footer links"
          isExternal
          style={{ fontSize: "36px", fontWeight: "bolder" }}
          href={data.links.email}
        >
          @
        </Link>
        <Link aria-label="footer links" isExternal href={data.links.green}>
          <SiWhatsapp size={36} />
        </Link>
      </Flex>
      <Text w="100%" textAlign="center" pt="5" borderTop="2px solid">
        ©2023 | Copyright. All Right Reserved
      </Text>
    </Flex>
  );
};

export default Footer;
