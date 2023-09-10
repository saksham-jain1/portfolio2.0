import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box px="5" pt="10" textAlign="justify" fontSize="1.2rem">
      <Heading id="about" pb="5">
        About
      </Heading>
      <Text mb="5">
        I'm a versatile software developer with a passion for web technologies
        and problem-solving.
        <br />
        <br />
        🚀 I create web applications that bring ideas to life.
        <br />
        💡 I love tackling complex challenges head-on.
        <br />
        🌟 I'm always eager to learn and grow.
        <br />
        <br />
        Explore my portfolio to see my work and get in touch if you'd like to
        collaborate!
        <br />
        <br />
        <span style={{ fontStyle: "oblique" }}>
          "It's not what you achieve, it's what you overcome. That's what
          defines your career."
          <br />
          <span style={{ float: "right" }}>~ Carlton Fisk</span>
        </span>
      </Text>
      <a href="#contact">
        <Button mt="1rem" colorScheme="yellow" p="1.4rem" fontSize="1.6rem">
          Contact Me
        </Button>
      </a>
    </Box>
  );
};

export default About;
