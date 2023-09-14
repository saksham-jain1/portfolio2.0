import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/about.json";
import data from "../data/data.js";

const About = () => {
  return (
    <Flex
      justifyContent="space-evenly"
      px="5"
      alignItems="center"
      flexWrap="wrap"
      id="about"
    >
      <Heading
        borderBottom="2px solid black"
        fontSize={{ base: "3rem", md: "4rem" }}
        textAlign="center"
        pt="10"
        mb="5"
        w="100%"
      >
        About
      </Heading>
      <Box w={{ base: "70%", md: "25%" }}>
        <Lottie animationData={aboutAnimation} loop={true} />
      </Box>
      <Box
        w={{ base: "100%", md: "60%" }}
        textAlign="justify"
        fontSize="1.2rem"
      >
        <Box my="5">
          {data.about.para}
          <br />
          <br />
          {data.about.list.map((i, ind) => {
            return (
              <Box key={ind}>
                {i}
                <hr />
                <br />
              </Box>
            );
          })}
          Explore my portfolio to see my work and get in touch if you'd like to
          collaborate!
          <br />
          <a href="#contact">
            <Button mt="1rem" colorScheme="yellow" p="1.4rem" fontSize="1.6rem">
              Contact Me
            </Button>
          </a>
          <br />
          <br />
          {data.about.quote && (
            <p
              id="quote"
              author={"~ " + data.about.quote.author}
              style={{ fontStyle: "oblique" }}
            >
              "{data.about.quote.quote}"
              <br />
            </p>
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
