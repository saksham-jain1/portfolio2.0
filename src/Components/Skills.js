import { Box, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer1.json";
import data from "../data/data.js";

const Skills = () => {
  const SkillsData = data.skills;
  return (
    <Box
      id="skills"
      position="relative"
      w="100%"
      display="flex"
      flexWrap="wrap"
      py="3rem"
    >
      <Heading
        textAlign="center"
        width="100%"
        mb={{ base: "0", md: "1rem" }}
        borderBottom="2px solid Black"
        mx={{ base: "1rem", md: "3rem" }}
        fontSize={{ base: "3rem", md: "4rem" }}
      >
        Skills
      </Heading>
      <Box
        position={{ lg: "absolute" }}
        mt={{ base: "-3.8rem", md: "-6rem", lg: "0" }}
        right="1rem"
        maxW="800px"
      >
        <Lottie animationData={animationData} />
      </Box>
      {SkillsData.map((curr, ind) => {
        return (
          <Box
            key={ind}
            alignItems="center"
            flexWrap="wrap"
            display="flex"
            w="100%"
            mx={{ base: "0.5rem", md: "3rem" }}
            zIndex="1"
            mt={{
              base: ind === 0 ? "-5rem" : "0",
              md: ind === 0 ? "-8rem" : "0",
              lg: "0",
            }}
          >
            <Heading color="blue.400" mt="1.5rem" w="100%">
              {curr.title}:
            </Heading>
            <Box display="flex" pr="1rem" flexWrap="wrap" mt=".5rem">
              {curr.data.map((skill, id) => {
                return (
                  <Tag
                    colorScheme="whatsapp"
                    key={id}
                    m=".4rem"
                    p=".7rem"
                    size="md"
                  >
                    {skill}
                  </Tag>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Skills;
