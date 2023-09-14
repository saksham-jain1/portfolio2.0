import { Box, Flex, Heading, Tag } from "@chakra-ui/react";
import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/developer1.json";
import data from "../data/data.js";
import CircleAnimation from "./CircleAnimation/CircleAnimation";

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
        borderBottom="2px solid Black"
        mx={{ base: "1rem", md: "1rem" }}
        fontSize={{ base: "3rem", md: "4rem" }}
      >
        Skills
      </Heading>
      <Flex
        wrap="wrap"
        px="1rem"
        gap="1rem"
        w="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        {SkillsData.map(({ title, data }) => {
          return (
            <CircleAnimation
              data={data}
              title={title}
              key={title}
              n={data?.length * 3 - 3}
            />
          );
        })}
      </Flex>
    </Box>
  );
};

export default Skills;
