import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Lottie from "lottie-react";
import Resume from "../assets/Sakshams Resume.pdf";
import developerAnimation from "../assets/developer.json";
import Typewriter from "typewriter-effect";

const Home = () => {
  const textLines = [
    "<b>Software Developer</b>",
    "<b>Web Developer</b>",
    "<b>Competitive Coder</b>",
    "<b>Problem Solver</b>",
  ];

  return (
    <Flex
      alignItems="center"
      direction="column"
      pt="10"
      w="100%"
      h="100%"
      id="home"
    >
      <Box w={{ base: "70%", md: "40%" }} maxW="400px">
        <Lottie animationData={developerAnimation} loop={true} />
      </Box>
      <Heading fontSize={{ base: "2rem", md: "3rem" }}>
        Hey Visitors <span className="waving">👋🏻</span>
      </Heading>
      <Heading fontWeight="light" fontSize={{ base: "2rem", md: "3rem" }}>
        I'm
        <Text fontWeight="extrabold" as="span" color="purple.600" px="2">
          Saksham Jain
        </Text>
      </Heading>
      <Text fontSize={{ base: "1.5rem", md: "2rem" }}>
        <Typewriter
          options={{
            strings: textLines,
            autoStart: true,
            loop: true,
            delay: 90,
            deleteSpeed: 40,
            pauseFor: 2000,
          }}
        />
      </Text>
      <Flex
        mt="5"
        gap="7"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        <a href={Resume} download="Saksham's Resume">
          <Button mt="1rem" colorScheme="whatsapp" p="1.4rem" fontSize="1.6rem">
            Resume
          </Button>
        </a>
        <a href="#contact">
          <Button mt="1rem" colorScheme="yellow" p="1.4rem" fontSize="1.6rem">
            Contact Me
          </Button>
        </a>
      </Flex>
    </Flex>
  );
};

export default Home;
