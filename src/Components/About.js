import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/about.json";

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
          I'm a versatile software developer with a passion for web technologies
          and problem-solving. Here's what sets me apart:
          <br />
          <br />
          <b>✨ Innovative Solutions:</b> I create web applications that bring
          ideas to life, leveraging the latest technologies to craft innovative
          solutions.
          <hr />
          <br />
          <b>🌟 Challenges Excite Me:</b> I thrive on tackling complex
          challenges head-on, turning them into opportunities for growth.
          <hr />
          <br />
          <b>🚀 Continuous Learner:</b> I'm always eager to learn and grow,
          staying up-to-date with industry trends and emerging technologies.
          <hr />
          <br />
          <b>🌐 Full-Stack Expertise:</b> My skills span the entire web
          development stack, from frontend design to backend logic and
          databases.
          <hr />
          <br />
          <b>🏆 Achievements:</b> I've achieved a top college rank, solved over
          500 coding questions, and scored in the top percentile in JEE Mains.
          <hr />
          <br />
          <br />
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
          <p id="quote" style={{ fontStyle: "oblique" }}>
            "It's not what you achieve, it's what you overcome. That's what
            defines your career."
            <br />
          </p>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
